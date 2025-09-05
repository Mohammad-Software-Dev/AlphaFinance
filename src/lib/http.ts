// src/lib/http.ts
import { BFF_BASE } from '../config'
import { ensureCsrf } from './csrf'
import { getCookie } from './cookies'

async function withCsrf(method: string): Promise<Headers> {
    const h = new Headers({ Accept: 'application/json' })
    if (method !== 'GET' && method !== 'HEAD') {
        const token = getCookie('csrftoken') || (await ensureCsrf()) || ''
        h.set('X-CSRFToken', token)
        h.set('Content-Type', 'application/json')
    }
    return h
}

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
    const url = path.startsWith('http') ? path : `${BFF_BASE}${path}`
    const method = (opts.method || 'GET').toUpperCase()
    const headers = await withCsrf(method)

    const finalHeaders = new Headers(headers)
    if (opts.headers) new Headers(opts.headers).forEach((v, k) => finalHeaders.set(k, v))

    const res = await fetch(url, {
        credentials: 'include',
        redirect: 'follow',
        ...opts,                 // <-- fixed
        headers: finalHeaders,
    })

    if (res.status === 403) {
        await ensureCsrf()
        const retry = await fetch(url, {
            credentials: 'include',
            redirect: 'follow',
            ...opts,               // <-- fixed
            headers: await withCsrf(method),
        })
        if (!retry.ok) throw new Error(`Request failed: ${retry.status}`)
        return (await safeJson<T>(retry))!
    }

    if (!res.ok) throw new Error(`Request failed: ${res.status}`)
    return (await safeJson<T>(res))!
}

async function safeJson<T>(res: Response): Promise<T | null> {
    const ct = res.headers.get('content-type') || ''
    if (!ct.includes('application/json')) return null
    return (await res.json()) as T
}

export const http = {
    get: <T>(p: string) => request<T>(p, { method: 'GET' }),
    post: <T>(p: string, body?: any) =>
        request<T>(p, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
}

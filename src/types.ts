export type MeResponse =
    | { authenticated: false }
    | {
        authenticated: true
        scope?: string
        expires_in?: number
    }

export type PwResetRequest = { email: string }
export type PwResetConfirm = { uid: string; token: string; new_password: string }

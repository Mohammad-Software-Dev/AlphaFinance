/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_SPA_ORIGIN?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

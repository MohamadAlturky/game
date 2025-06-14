/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string | undefined
  readonly VITE_APP_DESCRIPTION: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_PORT: string;
    readonly VITE_MODE: string;
    // Добавляйте другие переменные по мере необходимости
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

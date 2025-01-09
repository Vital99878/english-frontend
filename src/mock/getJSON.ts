
export default async function getJSON<TData>(path: string) {
    /* @vite-ignore */
    return import(`./response/${path}`).then((json) => json.default as TData)
}

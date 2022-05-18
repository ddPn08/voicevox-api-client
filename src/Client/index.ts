import { OtherClient } from './other.js'
import { QueryClient } from './query.js'
import { VoiceClient } from './voice.js'

export class Client {
    public readonly url: URL
    public readonly query = new QueryClient(this)
    public readonly voice = new VoiceClient(this)
    public readonly other = new OtherClient(this)

    constructor(url: string) {
        this.url = new URL(url)
    }

    private async loadFetcher(): Promise<typeof window.fetch> {
        if (typeof document === 'undefined') {
            return (await import('node-fetch')).default as any
        } else {
            return window.fetch
        }
    }

    public async request(pathname: string, init?: RequestInit, method: 'GET' | 'POST' = 'POST') {
        const url = new URL(pathname, this.url)
        const fetch = await this.loadFetcher()
        const res = await fetch(url.href, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            ...init,
        })
        if (res.status !== 200) {
            throw new Error(`${res.status} ${res.statusText}`)
        }
        return res
    }
}

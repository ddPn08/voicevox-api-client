import { fetch } from '../fetch'
import { OtherClient } from './Other'
import { QueryClient } from './Query'
import { VoiceClient } from './Voice'

export class Client {
    public readonly url: URL
    public readonly query = new QueryClient(this)
    public readonly voice = new VoiceClient(this)
    public readonly other = new OtherClient(this)

    constructor(url: string) {
        this.url = new URL(url)
    }

    public async request(pathname: string, init?: RequestInit, method: 'GET' | 'POST' = 'POST') {
        const url = new URL(pathname, this.url)
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

import { Client } from '.'
import { Query, Speaker } from '../types'

export class VoiceClient {
    constructor(private readonly client: Client) {}

    public async createVoice(speaker: Speaker, query: Query) {
        const res = await this.client.request(`/synthesis?speaker=${speaker}`, {
            body: JSON.stringify(query),
        })
        return await res.arrayBuffer()
    }

    public async createVoiceCancellable(speaker: Speaker, query: Query) {
        const res = await this.client.request(`/cancellable_synthesis?speaker=${speaker}`, {
            body: JSON.stringify(query),
        })
        return res
    }

    public async createVoiceMulti(speaker: Speaker, queries: Query[]) {
        const res = await this.client.request(`/multi_synthesis?speaker=${speaker}`, {
            body: JSON.stringify(queries),
        })
        return await res.arrayBuffer()
    }

    public async createVoiceMorphing(base_speaker: Speaker, target_speaker: Speaker, morph_rate: number, query: Query) {
        const res = await this.client.request(`/synthesis_morphing?base_speaker=${base_speaker}&target_speaker=${target_speaker}&morph_rate=${morph_rate}`, {
            body: JSON.stringify(query),
        })
        return await res.arrayBuffer()
    }
}

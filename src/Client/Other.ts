import { Client } from ".";
import { Preset, SpeakerData, SpeakerInfo } from "../types";

export class OtherClient {
    constructor(private readonly client: Client) {}

    public async margeWav(base64Array: string[]){
        const res = await this.client.request('/connect_waves', {
            body: JSON.stringify(base64Array),
        })
        return res.arrayBuffer()
    }

    public async getPreset(): Promise<Preset>{
        const res = await this.client.request('/preset', {} , 'GET')
        return await res.json()
    }

    public async getVersion(){
        const res = await this.client.request('/version', {}, 'GET')
        return await res.text()
    }

    public async getSpeakers(): Promise<SpeakerData>{
        const res = await this.client.request('/speakers', {}, 'GET')
        return await res.json()
    }

    public async getSpeakerInfo(speaker_uuid: string): Promise<SpeakerInfo>{
        const res = await this.client.request(`/speaker_info?speaker_uuid=${speaker_uuid}`, {}, 'GET')
        return await res.json()
    }
}
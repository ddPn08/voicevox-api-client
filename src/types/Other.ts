export type Preset = {
    id: number
    name: string
    speaker_uuid: string
    style_id: number
    speedScale: number
    pitchScale: number
    intonationScale: number
    volumeScale: number
    prePhonemeLength: number
    postPhonemeLength: number
}

export type SpeakerData = {
    name: string
    speaker_uuid: string
    version: string
    styles: {
        name: string
        id: number
    }[]
}

export type SpeakerInfo = {
    policy: string
    portrait: string
    style_infos: {
        id: string
        icon: string
        voice_sample: string[]
    }[]
}

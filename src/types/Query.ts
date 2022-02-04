import { Mora } from "."

export type Query = {
    accent_phrases: {
        moras: Mora[],
        accent: number,
        pause_mora: Mora
    },
    speedScale: number,
    pitchScale: number,
    intonationScale: number,
    volumeScale: number,
    prePhonemeLength: number,
    postPhonemeLength: number,
    outputSamplingRate: number,
    outputStereo: boolean,
    kana: string
}
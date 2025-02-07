/** EG: { k: 'parking:lane:{side}', v: 'no_stopping' } */
export interface OsmKeyValue {
    k: string
    v: string
}

export type SupportedCountryPreset = 'australia' | 'russia'
export interface Preset {
    /** Name of this preset */
    key: string
    country: SupportedCountryPreset
    tags: OsmKeyValue[]
    img: {
        src: string
        height: number
        width: number
        alt: string
        title: string
    }
}

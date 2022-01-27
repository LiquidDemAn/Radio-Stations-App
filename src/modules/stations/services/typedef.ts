import {Country, Station} from '../../../typedef';

export type stationsStateType = {
    allStations: {
        [country: string]: Station[]
    }
    favouriteStations: {
        [id: string]: boolean
    },
    activeStation: {
        station?: Station,
        isPlay: boolean
    },
    countries: Country[],
    selectedCountry?: string
};

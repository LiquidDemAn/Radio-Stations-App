import { Country, Station } from '../../../typedef';

export type stationsStateType = {
	allStations: {
		[country: string]: Station[];
	};
	favouriteStations: Station[];
	activeStation: {
		station?: Station;
		isPlay: boolean;
	};
	countries: Country[];
	selectedCountry?: string;
};

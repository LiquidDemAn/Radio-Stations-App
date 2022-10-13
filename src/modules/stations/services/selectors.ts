import { AppState } from '../../../store/hooks';

export const getActiveStation = (state: AppState) =>
	state.stations.activeStation.station;
export const getActiveStationId = (state: AppState) =>
	state.stations.activeStation.station?.stationuuid;
export const getActiveStationUrl = (state: AppState) =>
	state.stations.activeStation.station?.url;
export const getActiveStationIsPlay = (state: AppState) =>
	state.stations.activeStation.isPlay;
export const getCountries = (state: AppState) => state.stations.countries;
export const getSelectedCountry = (state: AppState) =>
	state.stations.selectedCountry;

export const getFavouriteStatus = (state: AppState, stationId: string) => {
	const stationsIds = state.stations.favouriteStations.map(
		(item) => item.stationuuid
	);
	return stationsIds.includes(stationId);
};

export const getStationsByCountry = (state: AppState) => {
	const country = getSelectedCountry(state);
	return state.stations.allStations[country || ''];
};

export const getFavouriteStations = (state: AppState) => {
	return state.stations.favouriteStations;
};

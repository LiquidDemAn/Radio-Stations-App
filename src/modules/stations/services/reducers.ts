import { createReducer } from '@reduxjs/toolkit';
import {
	loadCountries,
	loadStationsByCountry,
	changeIsPlay,
	deleteFavouriteStation,
	setFavouriteStation,
	setActiveStation,
	setSelectedCountry,
	loadFavouriteStations,
} from './actions';
import { stationsStateType } from './typedef';

const stationsState: stationsStateType = {
	allStations: {},
	favouriteStations: [],
	activeStation: {
		isPlay: false,
	},
	countries: [],
};

export const stations = createReducer(stationsState, (builder) =>
	builder
		.addCase(loadStationsByCountry.fulfilled, (state, { payload }) => {
			state.allStations[payload.country] = payload.stations;
		})

		.addCase(loadCountries.fulfilled, (state, { payload }) => {
			state.countries = payload;
			// state.selectedCountry = payload[0].name;
		})

		.addCase(setSelectedCountry, (state, { payload }) => {
			state.selectedCountry = payload.selectedCountry;
		})

		.addCase(setActiveStation, (state, { payload }) => {
			state.activeStation = payload;
		})

		.addCase(setFavouriteStation, (state, { payload }) => {
			state.favouriteStations.push(payload);
			// state.favouriteStations[payload.id] = payload.value;
		})

		.addCase(loadFavouriteStations.fulfilled, (state, { payload }) => {
			state.favouriteStations = payload;
		})

		.addCase(deleteFavouriteStation, (state, { payload }) => {
			state.favouriteStations = state.favouriteStations.filter(
				(item) => item.stationuuid !== payload.id
			);
		})

		.addCase(changeIsPlay, (state, { payload }) => {
			state.activeStation.isPlay = payload.isPlay;
		})
);

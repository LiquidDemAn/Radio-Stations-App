import { createReducer } from '@reduxjs/toolkit';
import {
	loadCountries,
	loadStationsByCountry,
	changeIsPlay,
	clearFavouriteStations,
	deleteFavouriteStation,
	setFavouriteStation,
	setActiveStation,
	setSelectedCountry,
	loadFavStations,
} from './actions';
import { stationsStateType } from './typedef';

const stationsState: stationsStateType = {
	allStations: {},
	favouriteStations: {},
	activeStation: {
		isPlay: false,
	},
	countries: [],
	fav: [],
};

export const stations = createReducer(stationsState, (builder) =>
	builder
		.addCase(loadStationsByCountry.fulfilled, (state, { payload }) => {
			state.allStations[payload.country] = payload.stations;
		})

		.addCase(loadCountries.fulfilled, (state, { payload }) => {
			state.countries = payload;
			state.selectedCountry = payload[0].name;
		})

		.addCase(setSelectedCountry, (state, { payload }) => {
			state.selectedCountry = payload.selectedCountry;
		})

		.addCase(setActiveStation, (state, { payload }) => {
			state.activeStation = payload;
		})

		.addCase(setFavouriteStation, (state, { payload }) => {
			state.fav.push(payload);
			// state.favouriteStations[payload.id] = payload.value;
		})

		.addCase(loadFavStations.fulfilled, (state, { payload }) => {
			state.fav = payload;
		})

		.addCase(deleteFavouriteStation, (state, { payload }) => {
			state.fav = state.fav.filter((item) => item.stationuuid !== payload.id);
			delete state.favouriteStations[payload.id];
		})

		.addCase(clearFavouriteStations, (state) => {
			state.favouriteStations = {};
		})

		.addCase(changeIsPlay, (state, { payload }) => {
			state.activeStation.isPlay = payload.isPlay;
		})
);

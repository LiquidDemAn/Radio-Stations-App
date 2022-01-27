import {createReducer} from '@reduxjs/toolkit';
import {
    loadCountries,
    loadStationsByCountry,
    changeIsPlay,
    clearFavouriteStations, deleteFavouriteStation,
    setFavouriteStation,
    setActiveStation,
    setSelectedCountry,
} from './actions';
import {stationsStateType} from './typedef';

const stationsState: stationsStateType = {
    allStations: {},
    favouriteStations: {},
    activeStation: {
        isPlay: false
    },
    countries: [],
};

export const stations = createReducer(stationsState, builder => builder
    .addCase(loadStationsByCountry.fulfilled, (state, {payload}) => {
        state.allStations[payload.country] = payload.stations;
    })

    .addCase(loadCountries.fulfilled, (state, {payload}) => {
        state.countries = payload;
        state.selectedCountry = payload[0].name;
    })

    .addCase(setSelectedCountry, (state, {payload}) => {
        state.selectedCountry = payload.selectedCountry;
    })

    .addCase(setActiveStation, (state, {payload}) => {
        state.activeStation = payload;
    })

    .addCase(setFavouriteStation, (state, {payload}) => {
        state.favouriteStations[payload.id] = payload.value;
    })

    .addCase(deleteFavouriteStation, (state, {payload}) => {
        delete state.favouriteStations[payload.id];
    })

    .addCase(clearFavouriteStations, (state) => {
        state.favouriteStations = {};
    })

    .addCase(changeIsPlay, (state, {payload}) => {
        state.activeStation.isPlay = payload.isPlay;
    })
);

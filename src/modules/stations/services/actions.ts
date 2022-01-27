import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Country, Station} from '../../../typedef';

export const loadStationsByCountry = createAsyncThunk<{ stations: Station[], country: string }, string>('stations/load-stations', async (country) => {
    const stations = await fetch(`http://all.api.radio-browser.info/json/stations/bycountry/${country}`)
        .then(res => res.json())
        .then((data: Station[]) => data.sort((a, b) => b.votes - a.votes));
    return {stations, country};
});

export const loadCountries = createAsyncThunk<Country[]>('stations/load-countries', async () => {
    return await fetch('http://all.api.radio-browser.info/json/countries')
        .then(res => res.json());
});

export const setFavouriteStation = createAction<{ id: string, value: boolean }>('stations/set-favourite');
export const setActiveStation = createAction<{ station: Station, isPlay: boolean }>('stations/set-active-station');
export const setSelectedCountry = createAction<{ selectedCountry: string }>('stations/set-country');
export const deleteFavouriteStation = createAction<{ id: string }>('stations/delete-favourite');
export const clearFavouriteStations = createAction('stations/clear-favourites');
export const changeIsPlay = createAction<{ isPlay: boolean }>('stations/change-isPause');


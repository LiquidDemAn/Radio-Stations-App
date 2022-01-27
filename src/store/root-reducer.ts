import {combineReducers} from '@reduxjs/toolkit';
import {stations} from '../modules/stations/services/reducers';

export const rootReducer = combineReducers({
    stations,
});
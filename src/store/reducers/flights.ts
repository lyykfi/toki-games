import { createReducer } from '@reduxjs/toolkit';

import { Flight } from 'models/flights';
import { getFlightsStart, getFlightsSuccess, getFlightsFail } from '../actions/flights';

export interface FlightsReducerState {
	flightList: Flight[];
	isLoaded: boolean;
	isLoading: boolean;
	error: Error | null;
}

export const INIT_STATE: FlightsReducerState = {
	flightList: [],
	error: null,
	isLoaded: false,
	isLoading: false,
}

export const flightsReducer = createReducer(INIT_STATE, {
	[getFlightsStart.type]: (state) => {
		return {
			...state,
			isLoaded: false,
			isLoading: true,
		}
	},
	[getFlightsSuccess.type]: (state, action) => {
		return {
			...state,
			flightList: action.payload,
			isLoaded: true,
			isLoading: false,
		}
	},
	[getFlightsFail.type]: (state, action) => {
		return {
			...state,
			error: action.payload,
			isLoaded: true,
			isLoading: false,
		}
	}
});

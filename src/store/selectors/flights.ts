import { StoreState } from '../reducers';
import { Flight } from 'models/flights';

export const isLoadedFlights = (state: StoreState): boolean => {
	return state.flights.isLoaded;
}

export const isLoadingFlights = (state: StoreState): boolean => {
	return state.flights.isLoading;
}

export const getFlightsList = (state: StoreState): Flight[] => {
	return state.flights.flightList;
}

export const getFlightsError = (state: StoreState): Error | null => {
	return state.flights.error;
}
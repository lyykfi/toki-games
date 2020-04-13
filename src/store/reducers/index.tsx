import { combineReducers } from "redux";
import { FlightsReducerState, flightsReducer } from './flights';

export interface StoreState {
	flights: FlightsReducerState;
}

export const rootReducer = combineReducers<StoreState>({
	flights: flightsReducer,
});

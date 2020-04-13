import { createAction } from "@reduxjs/toolkit";
import { Flight } from 'models/flights';

export const getFlights = createAction('FETCH_FLIGHTS');

export const getFlightsStart = createAction('FETCH_FLIGHTS_START');

export const getFlightsSuccess = createAction<Flight[]>('FETCH_FLIGHTS_SUCCESS');

export const getFlightsFail = createAction<Error>('FETCH_FLIGHTS_FAIL');
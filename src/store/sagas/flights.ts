import { call, put, all, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import {
	fetchBusinessFlightsRequst,
	fetchCheapFlightsRequst,
} from 'store/api/flights';
import {
	getFlights,
	getFlightsSuccess,
	getFlightsFail,
	getFlightsStart,
} from 'store/actions/flights';
import { combineFlights } from 'utils/flight';
import { BusinessFlight, Flight, CheapFlight } from 'models/flights';

export function* fetchFlights(): SagaIterator {
	try {
		yield put(getFlightsStart());

		const flights = yield all([
			call(fetchBusinessFlightsRequst),
			call(fetchCheapFlightsRequst),
		]);

		yield put(
			getFlightsSuccess(
				flights.reduce(
					(
						acc: Flight[],
						items: (BusinessFlight | CheapFlight)[],
					) => {
						return acc.concat(combineFlights(items));
					},
					[],
				),
			),
		);
	} catch (error) {
		yield put(getFlightsFail(error));
	}
}

export const flightsSagas = [takeEvery(getFlights.type, fetchFlights)];

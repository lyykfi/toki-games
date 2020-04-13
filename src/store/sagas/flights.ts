import { call, put, all, takeEvery } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';

import { fetchBusinessFlightsRequst, fetchCheapFlightsRequst } from 'store/api/flights';

const FETCH_FLIGHTS = 'FETCH_REQUESTED';

export function* fetchFlights(): SagaIterator {
   try {
      const data = yield all([
		call(fetchBusinessFlightsRequst),
		call(fetchCheapFlightsRequst),
	  ]);
      yield put({type: "FETCH_SUCCEEDED", data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

export const flightsSagas = [
	takeEvery(FETCH_FLIGHTS, fetchFlights),
]
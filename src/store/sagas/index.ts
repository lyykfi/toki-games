import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { flightsSagas } from './flights';

export default function* rootSaga(): SagaIterator {
	yield all([...flightsSagas]);
}

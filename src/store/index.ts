import { configureStore, Store, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "./reducers";
import rootSaga from './sagas';

export const getStore = (): Store => {
	const sagaMiddleware = createSagaMiddleware();
	
	const store = configureStore({
		reducer: rootReducer,
		middleware: [...getDefaultMiddleware({ thunk: false }),  sagaMiddleware],
	});

	sagaMiddleware.run(rootSaga);

	return store;
}
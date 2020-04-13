import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	isLoadedFlights,
	isLoadingFlights,
	getFlightsList,
	getFlightsError,
} from 'store/selectors/flights';
import { getFlights } from 'store/actions/flights';
import FlightsList from '.';

const FlightsListContainer = (): JSX.Element => {
	const isLoaded = useSelector(isLoadedFlights);
	const isLoading = useSelector(isLoadingFlights);
	const flightList = useSelector(getFlightsList);
	const error = useSelector(getFlightsError);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isLoaded && !isLoading) {
			dispatch(getFlights());
		}
	}, [isLoaded, isLoading, dispatch]);

	if (error) return <span>{error.message}</span>;

	return <FlightsList
		flightList={flightList}
		isLoading={isLoading}
	/>;
};

export default FlightsListContainer;

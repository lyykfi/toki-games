import objectHash from 'object-hash';
import { BusinessFlight, CheapFlight, Flight, FlightTypes } from 'models/flights';

const businessFlightToFlight = (flight: BusinessFlight): Flight => {
	const departureTime = new Date();
	departureTime.setTime(flight.departureTime);

	const arrivalTime = new Date();
	arrivalTime.setTime(flight.arrivalTime);

	const newFlight: Flight = {
		id: objectHash(flight),
		type: FlightTypes.BUSINESS,
		departure: {
			name: flight.departure,
			time: new Date(flight.departureTime * 1000),
		},
		arrival: {
			name: flight.arrival,
			time: new Date(flight.arrivalTime * 1000),
		}
	};

	return newFlight;
}

const getPointsByRoute = (route: string): string[] => {
	let points = ['', ''];

	route.split(' ').forEach((item) => {
		if(item.indexOf('-') !== -1) {
			points = item.split('-');
		}
	});

	return points;
}

const cheapFlightToFlight = (flight: CheapFlight): Flight => {
	const [ arrival, departure ] = getPointsByRoute(flight.route);

	const departureTime = new Date();
	departureTime.setTime(flight.departure);

	const arrivalTime = new Date();
	arrivalTime.setTime(flight.arrival);

	const newFlight: Flight = {
		id: objectHash(flight),
		type: FlightTypes.CHEAP,
		departure: {
			name: arrival,
			time: new Date(flight.arrival * 1000),
		},
		arrival: {
			name: departure,
			time: new Date(flight.departure * 1000),
		}
	};

	return newFlight;
}

export const combineFlight = (flight: BusinessFlight | CheapFlight): Flight | null => {
	if ((flight as BusinessFlight).arrivalTime) {
		return businessFlightToFlight(flight as BusinessFlight);
	} else if ((flight as CheapFlight).route) {
		return cheapFlightToFlight(flight as CheapFlight);
	}

	return null;
}

export const combineFlights = (flights: (BusinessFlight | CheapFlight)[]): Flight[] => {
	const result: Flight[] = [];

	flights.forEach((item) => {
		const newItem = combineFlight(item);

		if (newItem) {
			result.push(newItem);
		}
	})

	return result;
}
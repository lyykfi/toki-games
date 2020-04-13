export interface BusinessFlight {
	departure: string;
	arrival: string;
	departureTime: number;
	arrivalTime: number;
}

export interface CheapFlight {
	route: string;
	departure: number;
	arrival: number;
}

export enum FlightTypes {
	CHEAP = 'cheap',
	BUSINESS = 'business',
}

export interface WayPoint {
	name: string;
	time: Date;
}

export interface Flight {
	id: string;
	type: FlightTypes;
	departure: WayPoint;
	arrival: WayPoint;
}
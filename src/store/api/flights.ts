import Env from "utils/env";
import { BusinessFlights, CheapFlights } from 'models/flights';

const FLIGHTS_PATH = "flights";

interface FetchBusinessFlightsRequstResponse {
	data: BusinessFlights[];
}

interface FetchCheapFlightsRequstResponse {
	data: CheapFlights[];
}

export const fetchBusinessFlightsRequst = async (): Promise<BusinessFlights[]> => {
	const result: FetchBusinessFlightsRequstResponse = await (await fetch(
		`${Env.host}${FLIGHTS_PATH}/business`)).json();

	return result.data;
}

export const fetchCheapFlightsRequst = async (): Promise<CheapFlights[]> => {
	const result: FetchCheapFlightsRequstResponse = await (await fetch(
		`${Env.host}${FLIGHTS_PATH}/cheap`)).json();

	return result.data;
}
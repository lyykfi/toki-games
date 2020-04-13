import Env from "utils/env";
import { BusinessFlight, CheapFlight } from 'models/flights';

const FLIGHTS_PATH = "flights";

interface FetchBusinessFlightsRequstResponse {
	data: BusinessFlight[];
}

interface FetchCheapFlightsRequstResponse {
	data: CheapFlight[];
}

export const fetchBusinessFlightsRequst = async (): Promise<BusinessFlight[]> => {
	const result: FetchBusinessFlightsRequstResponse = await (await fetch(
		`${Env.host}${FLIGHTS_PATH}/business`)).json();

	return result.data;
}

export const fetchCheapFlightsRequst = async (): Promise<CheapFlight[]> => {
	const result: FetchCheapFlightsRequstResponse = await (await fetch(
		`${Env.host}${FLIGHTS_PATH}/cheap`)).json();

	return result.data;
}

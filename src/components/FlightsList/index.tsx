/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';

import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Flight, FlightTypes } from 'models/flights';

interface FlightsListProps {
	flightList: Flight[];
	isLoading: boolean;
}

const columns = [
	{ title: 'Departure', field: 'departureName' },
	{ title: 'Departure time', field: 'departureTime', type: 'date' },
	{ title: 'Arrival', field: 'arrivalName' },
	{ title: 'Arrival time', field: 'arrivalTime', type: 'date' },
	{
		title: 'Type',
		field: 'type',
		lookup: {
			[FlightTypes.BUSINESS]: FlightTypes.BUSINESS.toString(),
			[FlightTypes.CHEAP]: FlightTypes.CHEAP.toString(),
		},
	},
];

const FlightsList: React.FC<FlightsListProps> = (
	props: FlightsListProps,
): JSX.Element => {
	const { flightList, isLoading } = props;

	const data = useMemo(() => {
		return flightList.map((item) => {
			return {
				departureName: item.departure.name,
				arrivalName: item.arrival.name,
				departureTime: item.departure.time,
				arrivalTime: item.arrival.time,
				type: item.type,
			};
		});
	}, [flightList]);

	return (
		<Paper>
			{!isLoading && (
				<MaterialTable
					columns={columns as any}
					data={data}
					title="Flights"
					options={{
						filtering: true,
					}}
				/>
			)}
			{isLoading && <LinearProgress />}
		</Paper>
	);
};

export default FlightsList;

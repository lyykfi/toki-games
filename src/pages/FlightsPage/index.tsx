import React from 'react';
import Container from '@material-ui/core/Container';

import FlightsListContainer from 'components/FlightsList/container';

const FlightsPage = (): JSX.Element => {
	return (
		<Container fixed>
			<FlightsListContainer />
		</Container>
	);
}

export default FlightsPage;

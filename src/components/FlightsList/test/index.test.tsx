import React from 'react';
import { render } from '@testing-library/react';

import FlightsList from '..';

describe('FlightsList component', () => {
	it('FlightsList component snapshot', async () => {
		const { container } = render(
			<FlightsList isLoading={true} flightList={[]} />,
		);

		expect(container).toMatchSnapshot();
	});

	it('FlightsList component snapshot 2', async () => {
		const data =
			'[{"id":"f4a16fda3d77725aa30e405ad8374a4a50a40947","type":"business","departure":{"name":"Ankara","time":"2019-06-27T09:30:56.000Z"},"arrival":{"name":"Antalya","time":"2019-07-29T14:30:56.000Z"}},{"id":"609ec88225b60af1b7300d309c62abbf96a30ab8","type":"cheap","departure":{"name":"Eje","time":"2019-05-26T20:30:56.000Z"},"arrival":{"name":"Antalya","time":"2019-05-26T20:30:56.000Z"}},{"id":"7b17fd6df6087589a1954e9813918b66fc1aa808","type":"cheap","departure":{"name":"Eje","time":"2019-05-26T20:30:56.000Z"},"arrival":{"name":"Tizi","time":"2019-05-26T20:30:56.000Z"}}]';
		const { container } = render(
			<FlightsList isLoading={true} flightList={JSON.parse(data)} />,
		);

		expect(container).toMatchSnapshot();
	});
});

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getStore } from 'store';
import FlightsPage from 'pages/FlightsPage';

const App = (): JSX.Element => {
	return (
		<Provider store={getStore()}>
			<BrowserRouter>
				<Switch>
					<Route path="/">
						<FlightsPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

import { MainPage } from './components/Main';
import React, { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BattlePage } from './components/Battle';
import { LoginPage } from './components/Login';

export let ws = new WebSocket('ws://localhost:8082');

ws.onopen = function() {
	console.log('Connected to Server');
};

export const ContextShipOnMap = createContext({
	shipsOnMap: null,
	setShipsOnMap: () => {}
});

function App() {
	const [ shipsOnMap, setShipsOnMap ] = useState([]);

	const shipArray = { shipsOnMap, setShipsOnMap };

	return (
		<ContextShipOnMap.Provider value={shipArray}>
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="/public/" element={<LoginPage />} />
						<Route path="/public/main" element={<MainPage />} />
						<Route path="/public/main/battle/" element={<BattlePage />} />
					</Routes>
				</Router>
			</Provider>
		</ContextShipOnMap.Provider>
	);
}

export default App;

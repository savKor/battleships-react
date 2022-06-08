import { MainPage } from './components/Main';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BattlePage } from './components/Battle';

export let ws = new WebSocket('ws://localhost:8082');

ws.onopen = function() {
	console.log('Connected to Server');
};

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/public/" element={<MainPage />} />
					<Route path="/public/battle/" element={<BattlePage />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;

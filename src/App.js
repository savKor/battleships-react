import { MainPage } from './components/Main';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/public" element={<MainPage />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;

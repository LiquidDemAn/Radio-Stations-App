import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { StationsPage } from './modules/stations/stations-page';

function App() {
	useEffect(() => {
		if (!localStorage.favourites) {
			localStorage.favourites = JSON.stringify([]);
		}
	}, []);

	return (
		<Provider store={store}>
			<Container className='mt-3'>
				<StationsPage />
			</Container>
		</Provider>
	);
}

export default App;

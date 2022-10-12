import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { StationCard } from '../components/station-card';
import {
	loadCountries,
	loadFavStations,
	loadStationsByCountry,
} from '../services/actions';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store/hooks';
import {
	getCountries,
	getActiveStation,
	getSelectedCountry,
	getStationsByCountry,
} from '../services/selectors';
import { CountriesSelector } from '../components/countries-selector';
import { ActiveStation } from '../components/active-station';

export const AllStations = () => {
	const dispatch = useDispatch();
	const countries = useAppSelector(getCountries);
	const selectedCountry = useAppSelector(getSelectedCountry);
	const activeStation = useAppSelector(getActiveStation);
	const stations = useAppSelector(getStationsByCountry);

	const test = () => {
		[
			'962e5c39-0601-11e8-ae97-52543be04c81',
			'9619c637-0601-11e8-ae97-52543be04c81',
			'ea5af7a2-7107-476f-9cee-94904d48ddbe',
		].forEach((item) => {
			fetch(`http://all.api.radio-browser.info/json/stations/byuuid/${item}`)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
				});
		});
	};

	useEffect(() => {
		// test();
		dispatch(loadFavStations());
	}, []);

	useEffect(() => {
		dispatch(loadCountries());
	}, [dispatch]);

	useEffect(() => {
		if (selectedCountry) {
			if (!stations) {
				dispatch(loadStationsByCountry(selectedCountry));
			}
		}
	}, [dispatch, stations, selectedCountry]);

	return (
		<div>
			<CountriesSelector countries={countries} />
			{activeStation && <ActiveStation station={activeStation} />}
			<Row xs={1} md={2} className='g-4'>
				{stations &&
					stations.map((station) => (
						<Col key={station.stationuuid}>
							<StationCard station={station} />
						</Col>
					))}
			</Row>
		</div>
	);
};

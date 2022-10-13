import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { StationCard } from '../components/station-card';
import {
	loadCountries,
	loadFavouriteStations,
	loadStationsByCountry,
	setSelectedCountry,
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

	useEffect(() => {
		dispatch(loadCountries());
		dispatch(loadFavouriteStations());
	}, [dispatch]);

	useEffect(() => {
		if (selectedCountry) {
			if (!stations) {
				dispatch(loadStationsByCountry(localStorage.country));
			}
		}
	}, [dispatch, stations, selectedCountry]);

	useEffect(() => {
		const selectedCountry = localStorage.country;

		if (!selectedCountry) {
			localStorage.country = countries[0].name;
		} else {
			dispatch(setSelectedCountry({ selectedCountry }));
		}
	}, [dispatch, countries]);

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

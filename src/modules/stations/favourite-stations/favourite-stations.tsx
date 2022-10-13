import { useAppSelector } from '../../../store/hooks';
import { StationCard } from '../components/station-card';
import { Col, Row } from 'react-bootstrap';
import { getFavouriteStations } from '../services/selectors';

export const FavouriteStations = () => {
	const favouriteStations = useAppSelector(getFavouriteStations);

	return (
		<div>
			{!favouriteStations.length && (
				<h2 className='text-center'>Favourite list is empty</h2>
			)}
			<Row xs={1} md={2} className='g-4'>
				{favouriteStations.map((station) => (
					<Col key={station.stationuuid}>
						<StationCard station={station} />
					</Col>
				))}
			</Row>
		</div>
	);
};

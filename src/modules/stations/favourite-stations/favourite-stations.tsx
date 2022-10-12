import { useAppSelector } from '../../../store/hooks';
import { StationCard } from '../components/station-card';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { getFavouriteStations, getFavStaitons } from '../services/selectors';
import { useDispatch } from 'react-redux';
import { clearFavouriteStations } from '../services/actions';

export const FavouriteStations = () => {
	const dispatch = useDispatch();
	const favouriteStations = useAppSelector(getFavStaitons);

	const clearList = () => {
		dispatch(clearFavouriteStations());
	};

	return (
		<div>
			{favouriteStations.length ? (
				<button
					className='btn btn-dark d-block m-auto mb-3'
					onClick={clearList}
				>
					Clear List
				</button>
			) : (
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

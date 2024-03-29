import { Station } from '../../../../typedef';
import React from 'react';
import {
	changeIsPlay,
	deleteFavouriteStation,
	setFavouriteStation,
	setActiveStation,
} from '../../services/actions';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../store/hooks';
import {
	getFavouriteStatus,
	getActiveStationId,
	getActiveStationIsPlay,
} from '../../services/selectors';
import { StationCardView } from './station-card-view';

type Props = {
	station: Station;
};

export const StationCard = ({ station }: Props) => {
	const dispatch = useDispatch();

	const favStations: string[] = JSON.parse(localStorage.favourites);

	const favouriteStatus = useAppSelector((state) =>
		getFavouriteStatus(state, station.stationuuid)
	);
	const activeStationId = useAppSelector(getActiveStationId);
	const activeStationIsPlay = useAppSelector(getActiveStationIsPlay);

	const playToggle = () => {
		if (activeStationId === station.stationuuid) {
			dispatch(changeIsPlay({ isPlay: !activeStationIsPlay }));
		} else {
			dispatch(setActiveStation({ station: station, isPlay: true }));
		}
	};

	const favouriteToggle = () => {
		if (favouriteStatus) {
			localStorage.favourites = JSON.stringify(
				favStations.filter((item) => item !== station.stationuuid)
			);
			dispatch(
				deleteFavouriteStation({
					id: station.stationuuid,
				})
			);
		} else {
			localStorage.favourites = JSON.stringify([
				...favStations,
				station.stationuuid,
			]);

			dispatch(setFavouriteStation(station));
		}
	};

	return (
		<StationCardView
			station={station}
			favouriteStatus={favouriteStatus}
			favouriteToggle={favouriteToggle}
			playToggle={playToggle}
			activeStationId={activeStationId}
			activeStationIsPlay={activeStationIsPlay}
		/>
	);
};

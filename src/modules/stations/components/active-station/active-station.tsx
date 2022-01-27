import React, {useEffect, useRef} from 'react';
import {changeIsPlay, deleteFavouriteStation, setFavouriteStation} from '../../services/actions';
import {Station} from '../../../../typedef';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../../store/hooks';
import {
    getFavouriteStatus,
    getActiveStationIsPlay,
    getActiveStationUrl,
} from '../../services/selectors';
import {ActiveStationView} from './active-station-view';

type Props = {
    station: Station
};

export const ActiveStation = ({station}: Props) => {
    const dispatch = useDispatch();
    const favouriteStatus = useAppSelector(state => getFavouriteStatus(state, station.stationuuid));
    const activeStationIsPlay = useAppSelector(getActiveStationIsPlay);
    const activeStationUrl = useAppSelector(getActiveStationUrl);
    const audio = useRef(new Audio(activeStationUrl));

    useEffect(() => {
        activeStationIsPlay ? audio.current.play() : audio.current.pause()
    }, [activeStationUrl, activeStationIsPlay]);

    const playToggle = () => {
        dispatch(changeIsPlay({isPlay: !activeStationIsPlay}));
    };

    const favouriteToggle = () => {
        if (favouriteStatus) {
            dispatch(deleteFavouriteStation({
                id: station.stationuuid
            }));
        } else {
            dispatch(setFavouriteStation({
                id: station.stationuuid,
                value: true
            }));
        }
    };

    return (
        <ActiveStationView
            station={station}
            favouriteStatus={favouriteStatus}
            favouriteToggle={favouriteToggle}
            playToggle={playToggle}
            activeStationIsPlay={activeStationIsPlay}
            activeStationUrl={activeStationUrl}
            audio={audio}
        />
    );
};


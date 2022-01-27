import React, {RefObject} from 'react';
import './active-station.css';
import {Station} from '../../../../../typedef';
import {BiRadio} from 'react-icons/all';
import {PlayButton} from '../../play-button';
import {FaPause, FaPlay} from 'react-icons/fa';
import {ToggleIconButton} from '../../../../../components/toggle-icon-button';

type Props = {
    station: Station,
    favouriteStatus: boolean,
    favouriteToggle: () => void,
    playToggle: () => void,
    activeStationIsPlay: boolean,
    activeStationUrl?: string,
    audio: RefObject<HTMLAudioElement>
};

export const ActiveStationView = (
    {station, favouriteStatus, favouriteToggle, playToggle, activeStationIsPlay, activeStationUrl, audio}: Props
) => {
    return (
        <div className='active-stations'>
            <audio ref={audio} src={activeStationUrl}/>
            <h1>Current Station</h1>

            <div className='active-stations__info'>
                {station.favicon
                    ?
                    <img alt={station.name}
                         src={station.favicon}
                         className='active-stations__img'
                         loading='lazy'
                    />
                    : <BiRadio size='200px'/>
                }

                <div className='active-stations__describe'>
                    <h3>Name: {station.name}</h3>
                    <h4>HomePage: {station.homepage}</h4>
                </div>

                <div className='active-stations__buttons'>
                    <PlayButton toggle={playToggle}>
                        {activeStationIsPlay ? <FaPause/> : <FaPlay/>}
                    </PlayButton>
                    <ToggleIconButton active={favouriteStatus} onClick={favouriteToggle}/>
                </div>
            </div>
        </div>

    );
};


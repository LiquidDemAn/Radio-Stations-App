import React from 'react';
import { Station } from '../../../../../typedef';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BiRadio } from 'react-icons/all';
import { ToggleIconButton } from '../../../../../components/toggle-icon-button';
import { PlayButton } from '../../play-button';
import { FaPause, FaPlay } from 'react-icons/fa';

type Props = {
	station: Station;
	favouriteStatus: boolean;
	favouriteToggle: () => void;
	playToggle: () => void;
	activeStationId?: string;
	activeStationIsPlay: boolean;
};

export const StationCardView = ({
	station,
	favouriteStatus,
	favouriteToggle,
	playToggle,
	activeStationId,
	activeStationIsPlay,
}: Props) => {
	return (
		<Card style={{ minHeight: '270px' }}>
			<Card.Body>
				<Card.Title>{station.name}</Card.Title>
				<Row>
					<Col lg={4}>
						{station.favicon ? (
							<img
								alt={station.name}
								src={station.favicon}
								style={{ height: '150px' }}
								loading='lazy'
								className='w-100'
							/>
						) : (
							<BiRadio style={{ height: '150px' }} size='100%' />
						)}
					</Col>
					<Col lg={8}>
						<Card.Text>{station.homepage}</Card.Text>
					</Col>
				</Row>
			</Card.Body>
			<Card.Footer>
				<div className='d-flex'>
					<Button>Go to page</Button>
					<ToggleIconButton
						active={favouriteStatus}
						onClick={favouriteToggle}
					/>
					<PlayButton toggle={playToggle}>
						{activeStationId === station.stationuuid && activeStationIsPlay ? (
							<FaPause />
						) : (
							<FaPlay />
						)}
					</PlayButton>
				</div>
			</Card.Footer>
		</Card>
	);
};

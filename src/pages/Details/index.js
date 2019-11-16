import React from 'react';
import { FaPen, FaTrashAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Header, DetailsWrapper, Description, DateAndAddress } from './styles';

import Button from '../../components/Button';

import history from '../../services/history';

import { meetupCancelRequest } from '../../store/modules/meetup/actions';

export default function Details() {
	const meetup = useSelector(state => state.meetup.selectedMeetup);
	const dispatch = useDispatch();

	if (!meetup) {
		history.push('/dashboard');

		return null;
	}

	function handleCancel(id) {
		console.log(id);
		dispatch(meetupCancelRequest(id));
	}

	return (
		<Container>
			<Header>
				<div>{meetup.title}</div>
				<div>
					<div>
						<Link to={{ pathname: `/meetup-register/${meetup.id}` }}>
							<Button text={'Editar'} Icon={FaPen} width={'100px'} color={'#4ebaf8'} />
						</Link>
					</div>
					<div>
						<Button
							text={'Cancelar'}
							Icon={FaTrashAlt}
							width={'130px'}
							onClick={() => handleCancel(meetup.id)}
						/>
					</div>
				</div>
			</Header>
			<DetailsWrapper>
				<img src={meetup.banner ? meetup.banner.url : null} alt="" />
				<Description>{meetup.description}</Description>
				<DateAndAddress>
					<div>
						<FaRegCalendarAlt size={'16px'} />
						{meetup.formattedDate}
					</div>
					<div>
						<MdLocationOn size={'16px'} />
						{meetup.location}
					</div>
				</DateAndAddress>
			</DetailsWrapper>
		</Container>
	);
}

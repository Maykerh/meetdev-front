import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { FaPen, FaTrashAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

import {
	Container,
	Header,
	DetailsWrapper,
	Description,
	DateAndAddress
} from './styles';

import Button from '../../components/Button';

export default function Details({ location }) {
	const meetup = location.state.item;

	console.log(meetup);

	return (
		<Container>
			<Header>
				<div>{meetup.title}</div>
				<div>
					<div>
						<Button
							text={'Editar'}
							Icon={FaPen}
							width={'100px'}
							color={'#4ebaf8'}
						/>
					</div>
					<div>
						<Button
							text={'Cancelar'}
							Icon={FaTrashAlt}
							width={'130px'}
						/>
					</div>
				</div>
			</Header>
			<DetailsWrapper>
				<img src={meetup.banner.url} alt="" />
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

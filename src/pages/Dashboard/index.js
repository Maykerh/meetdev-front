import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { FaChevronRight, FaPlusCircle } from 'react-icons/fa';

import api from '../../services/api';

import { Container, ListHeader, List, ListItem } from './styles';

import Button from '../../components/Button';

const Dashboard = () => {
	const [userMeetups, setUserMeetups] = useState([]);

	useEffect(() => {
		async function loadMeetups() {
			const response = await api.get('/meetups');

			response.data.map(meetup => {
				let date = new Date(meetup.date);

				date = utcToZonedTime(date, 'America/Sao_Paulo');

				meetup.formattedDate = format(
					date,
					"d ' de ' LLLL ', às' k'h'",
					{ locale: pt }
				);
			});

			setUserMeetups(response.data);
		}

		loadMeetups();
	}, []);

	function renderItem(item) {
		return (
			<ListItem>
				<div>{item.title}</div>
				<div>
					<time>{item.formattedDate}</time>
					<Link to={`/meetup-details/${item.id}`}>
						<FaChevronRight size={12} color="#FFF" />
					</Link>
				</div>
			</ListItem>
		);
	}

	if (userMeetups.length === 0) {
		return 'Nenhum meetup encontrado';
	}

	return (
		<Container>
			<ListHeader>
				<div>Meus meetups</div>
				<Button text={'Novo meetup'} Icon={FaPlusCircle} />
			</ListHeader>
			<List>{userMeetups.map(meetup => renderItem(meetup))}</List>
		</Container>
	);
};

export default Dashboard;

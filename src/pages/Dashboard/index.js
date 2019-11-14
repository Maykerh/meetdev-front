import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { FaChevronRight, FaPlusCircle } from 'react-icons/fa';

import history from '../../services/history';

import api from '../../services/api';

import { Container, ListHeader, List, ListItem } from './styles';

import Button from '../../components/Button';
import { setSelectedMeetup } from '../../store/modules/meetup/actions';

const Dashboard = () => {
	const [userMeetups, setUserMeetups] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		async function loadMeetups() {
			const response = await api.get('/meetups');

			response.data.map(meetup => {
				let date = new Date(meetup.date);

				date = utcToZonedTime(date, 'America/Sao_Paulo');

				meetup.formattedDate = format(date, "d ' de ' LLLL ', às' k'h'", { locale: pt });
			});

			setUserMeetups(response.data);
		}

		loadMeetups();
	}, []);

	function handleMeetupClick(meetupData) {
		dispatch(setSelectedMeetup(meetupData));

		history.push('/meetup-details');
	}

	function renderItem(item) {
		return (
			<ListItem>
				<div>{item.title}</div>
				<div>
					<time>{item.formattedDate}</time>
					<FaChevronRight
						size={12}
						color='#FFF'
						onClick={() => {
							handleMeetupClick(item);
						}}
					/>
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
				<Link to={{ pathname: '/meetup-register/' }}>
					<Button text={'Novo meetup'} Icon={FaPlusCircle} />
				</Link>
			</ListHeader>
			<List>{userMeetups.map(meetup => renderItem(meetup))}</List>
		</Container>
	);
};

export default Dashboard;

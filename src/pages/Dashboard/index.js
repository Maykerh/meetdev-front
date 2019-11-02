import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ListHeader, List, ListItem } from './styles';

import Button from '../../components/Button';

import { FaChevronRight, FaPlusCircle, FaAcquisitionsIncorporated } from 'react-icons/fa';

const Dashboard = () => {
	const [userMeetups, setUserMeetups] = useState = [];

	continuar aqui, buscar os meetups no banco!

	render() {
		return (
			<Container>
				<ListHeader>
					<div>Meus meetups</div>
					<Button text={'Novo meetup'} Icon={FaPlusCircle} />
				</ListHeader>
				<List>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
					<ListItem>
						<div>Meetup 1</div>
						<div>
							<time> 24 de junho, às 20h </time>
							<Link to="/meetup-details">
								<FaChevronRight size={12} color="#FFF" />
							</Link>
						</div>
					</ListItem>
				</List>
			</Container>
		);
	}
}

export default Dashboard;

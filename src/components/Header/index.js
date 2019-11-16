import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, HeaderContent, UserActions } from './styles';
import Logo from '../Logo';
import Button from '../Button';

import { FaDoorOpen } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { logout } from '../../store/modules/auth/actions';

const Header = () => {
	const userData = useSelector(state => state.auth.profile);
	const dispatch = useDispatch();

	function handleLogout() {
		dispatch(logout());
	}

	return (
		<>
			<Container>
				<HeaderContent>
					<div>
						<Link to={{ pathname: '/dashboard' }}>
							<Logo size="50px" />
						</Link>
					</div>
					<UserActions>
						<div>
							<span>{userData.name}</span>
							<Link to={{ pathname: '/profile' }}>
								<span>Meu Perfil</span>
							</Link>
						</div>
						<Button text={'Sair'} width={'70px'} Icon={FaDoorOpen} onClick={handleLogout} />
					</UserActions>
				</HeaderContent>
			</Container>
		</>
	);
};

export default Header;

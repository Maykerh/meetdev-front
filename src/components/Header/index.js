import React from 'react';

import { Container, HeaderContent, UserActions } from './styles';
import Logo from '../Logo';
import Button from '../Button';

import { FaDoorOpen } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Header = () => {
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
							<span>Mayke Herbst</span>
							<span>Meu Perfil</span>
						</div>
						<Button text={'Sair'} width={'70px'} Icon={FaDoorOpen} />
					</UserActions>
				</HeaderContent>
			</Container>
		</>
	);
};

export default Header;

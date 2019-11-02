import React from 'react';

import { Container, HeaderContent, UserActions } from './styles';
import Logo from '../Logo';
import Button from '../Button';

import { FaDoorOpen } from 'react-icons/fa';

const Header = () => {
	return (
		<>
			<Container>
				<HeaderContent>
					<div>
						<Logo size="50px" />
					</div>
					<UserActions>
						<div>
							<span>Mayke Herbst</span>
							<span>Meu Perfil</span>
						</div>
						<Button
							text={'Sair'}
							width={'70px'}
							Icon={FaDoorOpen}
						/>
					</UserActions>
				</HeaderContent>
			</Container>
		</>
	);
};

export default Header;

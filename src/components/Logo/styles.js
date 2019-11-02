import styled from 'styled-components';

export const Container = styled.div`
	font-size: ${props => (props.size ? props.size : '60px')};
	color: #f84c69;
	font-family: 'Permanent Marker';
	margin-bottom: 30px;
`;

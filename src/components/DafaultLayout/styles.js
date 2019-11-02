import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: calc(100% - 80px);
	max-width: ${props => (props.maxWidth ? props.maxWidth : '900px')};
	margin: 0 auto;
`;

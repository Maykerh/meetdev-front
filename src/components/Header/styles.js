import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	height: 80px;
	background-color: #18161f;
	display: flex;
	flex-direction: row;
`;

export const HeaderContent = styled.div`
	width: 100%;
	height: 100%;
	max-width: ${props => (props.maxWidth ? props.maxWidth : '900px')};
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`;

export const UserActions = styled.div`
	display: flex;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 20px;

		span:first-child {
			color: #fff;
			font-weight: bold;
			font-size: 12px;
		}

		span:last-child {
			color: #acacac;
			font-weight: bold;
			font-size: 10px;
			align-self: flex-end;
			margin-top: 3px;
		}
	}

	button {
		align-self: center;
	}
`;

import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const ListHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	margin-top: 30px;

	div {
		color: #fff;
		font-size: 25px;
		font-weight: bold;
		justify-content: center;
	}
`;

export const List = styled.div`
	width: 100%;
	height: calc(100% - 100px);
	overflow: auto;
	margin-bottom: 30px;
`;

export const ListItem = styled.div`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	margin-bottom: 10px;
	background-color: #00000040;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;

	div {
		color: #fff;
		font-weight: bold;
	}

	div:last-child {
		display: flex;
		align-items: center;

		time {
			color: #cacaca;
			font-size: 12px;
			margin-right: 30px;
		}

		a {
			margin-top: 2px;
		}
	}

	svg {
		cursor: pointer;
	}
`;

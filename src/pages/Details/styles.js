import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
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

	div:last-child {
		display: flex;
		flex-direction: row;

		div:first-child {
			margin-right: 15px;
		}
	}
`;

export const DetailsWrapper = styled.div`
	width: 100%;
	height: calc(100% - 100px);
	overflow: auto;
	margin-bottom: 30px;

	img {
		height: 300px;
		width: 100%;
	}
`;

export const Description = styled.div`
	color: #fff;
	margin-top: 15px;
`;

export const DateAndAddress = styled.div`
	color: #a6a6a6;
	font-size: 12px;
	display: flex;
	margin-top: 15px;

	div:first-child {
		margin-right: 20px;
	}
`;

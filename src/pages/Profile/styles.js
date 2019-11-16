import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 30px;

	input {
		height: 50px;
		width: 100%;
		border: none
		background-color: rgba(0, 0, 0, 0.4);
		color: #acacac;
		font-size: 16px;
		padding: 0 10px;
		box-sizing: border-box;
		border-radius: 4px;
		margin-top: 10px;

		::placeholder {
			color:  #acacac20;
		}
	}

	button {
		float: right;
		margin-top: 10px;
	}
`;

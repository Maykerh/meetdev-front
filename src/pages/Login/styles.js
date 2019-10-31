import styled from 'styled-components';

export const Container = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;

	> div {
		height: 300px;
		width: 315px;
		display: flex;
		flex-direction: column;
		align-items: center;

		#logo {
			font-size: 60px;
			color: #f84c69;
			font-family: 'Permanent Marker';
			margin-bottom:30px;
		}

		input {
			height: 50px;
			width: 315px;
			margin-bottom: 15px;
			border: none
			background-color: rgba(0, 0, 0, 0.4);
			color: #acacac;
			font-size: 18px;
			padding: 0 10px;
			box-sizing: border-box;

			::placeholder {
				color:  #acacac20;
			}
		}

		button {
			height: 50px;
			width: 315px;
			color: #fff;
			background-color: #f84c69;
			border: none;
			border-radius: 5px;
			font-size: 18px
		}
	}
`;

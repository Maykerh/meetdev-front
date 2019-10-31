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

		form {
			display: flex;
			flex-direction: column;

			div {
				margin-bottom: 15px;

				input {
					height: 50px;
					width: 315px;
					border: none
					background-color: rgba(0, 0, 0, 0.4);
					color: #acacac;
					font-size: 16px;
					padding: 0 10px;
					box-sizing: border-box;
					border-radius: 4px;
					margin-bottom:3px;

					::placeholder {
						color:  #acacac20;
					}
				}

				span {
					color:  #aa0000;
					font-size: 14px;
				}
			}

			button {
				height: 50px;
				width: 315px;
				color: #fff;
				background-color: #f84c69;
				border: none;
				border-radius: 4px;
				font-size: 18px;
				margin-bottom: 10px;
			}

			a {
				text-decoration: none;
				color: #acacac;
				font-size: 14px;
				align-self: center
			}
		}
	}
`;

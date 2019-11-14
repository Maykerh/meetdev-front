import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 30px;

	#form-fields {
		span {
			color: #fb6f91;
			align-self: flex-start;
			margin: 0 0 10px;
			font-weight: bold;
		}
	}

	textarea,
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

	textarea {
		height: 180px;
		padding-top: 10px;
		font-family: 'roboto'
	}

	button {
		float: right;
		margin-top: 10px;
	}
`;

export const ImageInput = styled.div`
	align-self: center;
	margin-bottom: 20px;
	width: 100%;

	#upload-component {
		background-color: rgba(0, 0, 0, 0.4);
		color: #acacac;
		height: 240px;
		max-height: 240px;
		font-weight: bold;
		font-size: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&:hover {
			opacity: 0.7;
		}
	}

	label {
		cursor: pointer;

		&:hover {
			opacity: 0.7;
		}

		img {
			height: 240px;
			max-height: 240px;
			width: 100%;
			border: none;
			border-radius: 4px;
		}

		input {
			display: none;
		}
	}
`;

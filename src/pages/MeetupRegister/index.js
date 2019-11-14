import React, { useState, useEffect, useRef } from 'react';
import { useField, Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';

import { Container, ImageInput } from './styles';

import { FaCamera, FaPlusCircle } from 'react-icons/fa';

import { meetupRegisterRequest } from '../../store/modules/meetup/actions';

import api from '../../services/api';

import * as Yup from 'yup';

const schema = Yup.object().shape({
	title: Yup.string().required(),
	description: Yup.string().required(),
	date: Yup.string().required(),
	location: Yup.string().required()
});

export default function MeetupRegister() {
	const { defaultValue, registerField } = useField('avatar');

	const [file, setFile] = useState(defaultValue && defaultValue.id);
	const [preview, setPreview] = useState(defaultValue && defaultValue.url);

	const dispatch = useDispatch();

	const ref = useRef();

	useEffect(() => {
		if (ref.current) {
			registerField({
				name: 'banner_id',
				ref: ref.current,
				path: 'dataset.file'
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref]);

	async function handleChangeImage(e) {
		const data = new FormData();

		data.append('file', e.target.files[0]);

		const response = await api.post('files', data);

		const { id, url } = response.data;

		setFile(id);
		setPreview(url);
	}

	function handleSubmit(data) {
		data.banner_id = file;

		dispatch(meetupRegisterRequest(data));
	}

	function getImgComponent() {
		return <img src={preview} alt='' />;
	}

	function getUploadComponent() {
		return (
			<div id='upload-component'>
				<FaCamera size={'50px'} />
				<span>{'Selecionar imagem'}</span>
			</div>
		);
	}

	return (
		<Container>
			<Form schema={schema} onSubmit={handleSubmit}>
				<ImageInput>
					<label htmlFor='banner'>
						{preview ? getImgComponent() : getUploadComponent()}

						<input
							type='file'
							id='banner'
							accept='image/*'
							data-file={file || null}
							onChange={handleChangeImage}
							ref={ref}
						/>
					</label>
				</ImageInput>
				<div id='form-fields'>
					<Input name='title' type='text' placeholder='Título' />
					<Input name='description' type='text' placeholder='Descrição' multiline />
					<Input name='date' type='text' placeholder='Data' />
					<Input name='location' type='text' placeholder='Localização' />
				</div>

				<Button type='submit' Icon={FaPlusCircle} text={'Salvar meetup'} />
			</Form>
		</Container>
	);
}

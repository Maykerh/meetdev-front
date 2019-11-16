export function setSelectedMeetup(meetupData) {
	return {
		type: '@meetup/SET_SELECTED_MEETUP',
		payload: meetupData
	};
}

export function meetupRegisterRequest(meetupData) {
	return {
		type: '@meetup/REGISTER_REQUEST',
		payload: meetupData
	};
}

export function meetupRegisterSuccess(meetupData) {
	return setSelectedMeetup(meetupData);
}

export function meetupUpdateRequest(meetupData, id) {
	return {
		type: '@meetup/UPDATE_REQUEST',
		payload: { meetupData, id }
	};
}

export function meetupCancelRequest(id) {
	return {
		type: '@meetup/CANCEL_REQUEST',
		payload: id
	};
}

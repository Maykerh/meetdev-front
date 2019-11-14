export function setSelectedMeetup(meetupData) {
	console.log('meetupData');
	console.log(meetupData);
	return {
		type: '@meetup/SET_SELECTED_MEETUP',
		payload: meetupData
	};
}

export function meetupRegisterRequest(meetupData) {
	console.log('register meetupData');
	console.log(meetupData);
	return {
		type: '@meetup/REGISTER_REQUEST',
		payload: meetupData
	};
}

export function meetupRegisterSuccess(meetupData) {
	return setSelectedMeetup(meetupData);
}

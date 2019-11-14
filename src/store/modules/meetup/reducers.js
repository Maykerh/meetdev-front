const initialState = {
	selectedMeetup: null
};

export default (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case '@meetup/SET_SELECTED_MEETUP':
			return { ...state, selectedMeetup: action.payload };
		default:
			return state;
	}
};

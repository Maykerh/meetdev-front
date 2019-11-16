import { combineReducers } from 'redux';

import auth from './auth/reducers';
import meetup from './meetup/reducers';
import persistReducer from './persistReducer';

const rootReducer = combineReducers({
	auth,
	meetup,
	persistReducer
});

export default rootReducer;

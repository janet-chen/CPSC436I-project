import { mediaReducer } from './media/mediaReducer';
import { tripsReducer } from './trips/tripsReducer';
import { userReducer } from './user/userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    ...mediaReducer,
    ...tripsReducer,
    ...userReducer
});

export default rootReducer;

import { mediaReducer } from './media/mediaReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    ...mediaReducer
});

export default rootReducer;
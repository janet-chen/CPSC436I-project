import { combineReducers } from 'redux';
import initialImages from '../initialImages';

const defaultSearchState = {
  currentSearch: '',
  savedImages: initialImages
};

const searchReducer = (state = defaultSearchState, action) => {
  switch (action.type) {
    case 'SET':
      return {
        currentSearch: action.newSearch,
        savedImages: [...state.savedImages]
      };
    default:
      return state;
  }
};

const saveImagesReducer = (state = defaultSearchState, action) => {
  switch (action.type) {
    case 'SAVE':
      return {
        currentSearch: state.currentSearch,
        savedImages: [...action.queryResults]
      };
    case 'CLEAR':
      return {
        savedImages: []
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  submittedSearch: searchReducer,
  submittedImages: saveImagesReducer
});

export default rootReducer;

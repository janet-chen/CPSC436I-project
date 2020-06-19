import { combineReducers } from 'redux';

const defaultSearchState = {
  currentSearch: '',
  savedImages: []
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
        savedImages: [...state.savedImages, ...action.queryResults]
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

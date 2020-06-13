import { combineReducers } from 'redux';

const defaultSearchState = {
  currentSearch: ''
};

const searchReducer = (state = defaultSearchState, action) => {
  switch (action.type) {
    case 'SET':
      return {
        currentSearch: action.newSearch
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  submittedSearch: searchReducer
});

export default rootReducer;

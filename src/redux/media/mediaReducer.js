import {
    FETCH_MEDIA_REQUEST,
    FETCH_MEDIA_SUCCESS,
    FETCH_MEDIA_FAILURE,
    SET_DESTINATION
} from './mediaTypes.js';

const initialState = {
    loading: false,
    media: [],
    error: ''
}

const mediaState = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEDIA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MEDIA_SUCCESS:
            return {
                ...state,
                loading: false,
                media: action.payload,
                error: ''
            }
        case FETCH_MEDIA_FAILURE:
            return {
                ...state,
                loading: false,
                media: [],
                error: action.payload
            }
        default: return state
    }
}

const queryState = (state = {destination: ''}, action) => {
    if (action.type === SET_DESTINATION) {
        console.log("setting new destination: " + action.destination)
        return {
            destination: action.destination
        }
    }
    return state;
}

export const mediaReducer = {
    media: mediaState,
    query: queryState,
}
import {
    FETCH_MEDIA_REQUEST,
    FETCH_MEDIA_SUCCESS,
    FETCH_MEDIA_FAILURE,
    SAVE_MEDIA_REQUEST,
    SAVE_MEDIA_SUCCESS,
    SAVE_MEDIA_FAILURE,
    UNSAVE_MEDIA_SUCCESS,
    UNSAVE_MEDIA_FAILURE,
} from './mediaTypes.js';

import Unsplash, { toJson } from 'unsplash-js';
const APP_ACCESS_KEY = 'adYDaJCisGClWz_PnSuJJiuzl1hItt3kKGxKLePeYPA';
const SECRET_KEY = 'KFaS1rVbg4l9G1OJ1TSVCL2mYnDMl9c-5wi8puO2Bjo';
const unsplash = new Unsplash(
  {
    accessKey: APP_ACCESS_KEY,
    secret: SECRET_KEY
  }
);


const fetchMediaRequest = () => {
    return {
        type: FETCH_MEDIA_REQUEST
    }
}

const fetchMediaSuccess = content => {
    return {
        type: FETCH_MEDIA_SUCCESS,
        payload: content
    }
}

const fetchMediaFailure = error => {
    return {
        type: FETCH_MEDIA_FAILURE,
        payload: error
    }
}

export const fetchMedia = destination => {
    return (dispatch) => {
        dispatch(fetchMediaRequest);
        unsplash.search.photos(destination, 1, 12, { orientation: 'landscape' })
            .then(toJson)
            .then(json => {
                dispatch(fetchMediaSuccess({...json, query: destination}));
            })
            .catch(error => {
                dispatch(fetchMediaFailure(error.message));
            });
    }
}

const saveMediaRequest = () => {
    return {
        type: SAVE_MEDIA_REQUEST
    }
}
const saveMediaSuccess = (folder, content) => {
    return {
        type: SAVE_MEDIA_SUCCESS,
        folder: folder,
        payload: content
    }
}

const saveMediaFailure = error => {
    return {
        type: SAVE_MEDIA_FAILURE,
        payload: error
    }
}

const unsaveMediaSuccess = (folder, content) => {
    return {
        type: UNSAVE_MEDIA_SUCCESS,
        folder: folder,
        payload: content
    }
}

const unsaveMediaFailure = error => {
    return {
        type: UNSAVE_MEDIA_FAILURE,
        payload: error
    }
}

export const toggleSaveMedia = (folder, media, shouldSave) => {
    return (dispatch) => {
        dispatch(saveMediaRequest);
        if (shouldSave) {
            /* save id to mongoDB */
            dispatch(saveMediaSuccess(folder, media));
        } else {
            /* unsave id to mongoDB */
            dispatch(unsaveMediaSuccess(folder, media));
        }
    }
}
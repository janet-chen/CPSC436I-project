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

const initialState = {
    loading: false,
    results: [],
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
                ...action.payload,
                error: ''
            }
        case FETCH_MEDIA_FAILURE:
            return {
                ...state,
                loading: false,
                results: [],
                error: action.payload
            }
        default: return state
    }
}

// const initialSave = {
//     loading: false,
//     results: {},
//     error: ''
// }

// const saveMediaState = (state = initialSave, action) => {
//     switch (action.type) {
//         case SAVE_MEDIA_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case SAVE_MEDIA_SUCCESS:
//             state.results[action.payload.id] = action.payload;
//             return {
//                 ...state,
//                 loading: false,
//                 results: {
//                     ...state.results,
//                 },
//                 error: ''
//             }
//         case SAVE_MEDIA_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload
//             }
//         case UNSAVE_MEDIA_SUCCESS:
//             delete state.results[action.payload.id];
//             return {
//                 ...state,
//                 loading: false,
//                 results: {
//                     ...state.results,
//                 },
//                 error: ''
//             }
//         case UNSAVE_MEDIA_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload
//             }
//         default: return state
//     }
// }

const initialFolders = {
    loading: false,
    folders: [],
    error: ''
}

const foldersReducer = (state = initialFolders, action) => {
    switch (action.type) {
        case SAVE_MEDIA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SAVE_MEDIA_SUCCESS:

            if (state.folders
                .find(f => f.name === action.folder) === undefined) {
                state.folders.push({
                    name: action.folder,
                    images: []
                })
            }
            state.folders
                .find(f => f.name === action.folder)
                .images.push(action.payload);
            
            return {
                ...state,
                loading: false,
                folders: [
                    ...state.folders,
                ],
                error: ''
            }
        case SAVE_MEDIA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UNSAVE_MEDIA_SUCCESS:
            let folder = state.folders
                .find(f => f.name === action.folder);
            
            if (folder !== undefined) {
                folder.images = folder.images.filter(img => img.id !== action.payload.id);
            }

            return {
                ...state,
                loading: false,
                folders: [
                    ...state.folders,
                ],
                error: ''
            }
        case UNSAVE_MEDIA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}


export const mediaReducer = {
    media: mediaState,
    folders: foldersReducer
}
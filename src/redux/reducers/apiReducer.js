import {
    RESPONSE_SUCCESS, RESPONSE_FAILURE
} from '../actions';

const initialState = {
    data: '',
    error: ''
}

export function apiReducer(state = initialState, action) {
    switch (action.type) {
        case RESPONSE_SUCCESS:
            console.log("action", action);
            return {
                ...state,
                data: action.value
            }
        case RESPONSE_FAILURE:
            console.log("action", action);
            return {
                ...state,
                error: action.value
            }
        default:
            return state;
    }
}
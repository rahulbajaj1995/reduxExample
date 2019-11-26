import { RESPONSE_SUCCESS, SET_LOADING } from '../actions';

const initialState = {
    data: '',
    isLoading: false
}

export function apiReducer(state = initialState, action) {
    switch (action.type) {
        case RESPONSE_SUCCESS:
            return {
                ...state,
                data: action.value,
                isLoading: false
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state;
    }
}
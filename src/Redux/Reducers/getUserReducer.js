import {GET_USER} from '../Actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                isLoading: true
            };
            break;
        default:
            return state;
    }
}
import { ADD_TODO } from './actionTypes';

const initialState = {
    pending: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                pending: [...state.pending, action.payload]
            };

        default:
            return state;
    }
}
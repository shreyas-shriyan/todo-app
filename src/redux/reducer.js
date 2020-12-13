import { ADD_TODO, COMPLETE_TODO, REMOVE_ALL_TODO } from './actionTypes';

const initialState = {
    pending: [],
    completed: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                pending: [...state.pending, action.payload]
            };

        case COMPLETE_TODO:
            let tempPending = state.pending.filter((item) => item.id !== action.payload.id)
            return {
                ...state,
                pending: tempPending,
                completed: [...state.completed, action.payload]
            };

        case REMOVE_ALL_TODO:
            return {
                ...state,
                pending: [],
                completed: []
            };

        default:
            return state;
    }
}
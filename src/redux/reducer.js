import { ADD_TODO, COMPLETE_TODO } from './actionTypes';

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
            console.log(tempPending);
            return {
                ...state,
                pending: tempPending,
                completed: [...state.completed, action.payload]
            };

        default:
            return state;
    }
}
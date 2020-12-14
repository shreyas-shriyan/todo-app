import { ADD_TODO, COMPLETE_TODO, REMOVE_ALL_TODO, LOAD_FROM_LOCAL } from './actionTypes';

const initialState = {
    pending: [],
    completed: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            localStorage.setItem("todoData", JSON.stringify({ ...state, pending: [...state.pending, action.payload] }))
            return {
                ...state,
                pending: [...state.pending, action.payload]
            };

        case COMPLETE_TODO:

            let tempPending = state.pending.filter((item) => item.id !== action.payload.id)
            localStorage.setItem("todoData", JSON.stringify({ ...state, pending: tempPending, completed: [...state.completed, action.payload] }))
            return {
                ...state,
                pending: tempPending,
                completed: [...state.completed, action.payload]
            };

        case REMOVE_ALL_TODO:
            localStorage.setItem("todoData", JSON.stringify({ pending: [], completed: [] }))
            return {
                ...state,
                pending: [],
                completed: []
            };

        case LOAD_FROM_LOCAL:
            return {
                ...action.payload
            };

        default:
            return state;
    }
}
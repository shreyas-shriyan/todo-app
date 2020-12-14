import { ADD_TODO, COMPLETE_TODO, REMOVE_ALL_TODO, LOAD_FROM_LOCAL, ADD_HASHTAG_ITEM, CHANGE_HASHTAG_ITEM } from './actionTypes';

const initialState = {
    pending: [],
    completed: [],
    hashtagItems: [],
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
            localStorage.setItem("todoData", JSON.stringify({ pending: [], completed: [], hashtagItems: [] }))
            return {
                ...state,
                pending: [],
                completed: [],
                hashtagItems: [],
            };

        case LOAD_FROM_LOCAL:
            return {
                ...action.payload
            };

        case ADD_HASHTAG_ITEM:
            return {
                ...state,
                hashtagItems: [...state.hashtagItems, action.payload]
            };

        case CHANGE_HASHTAG_ITEM:
            let temp = state.hashtagItems.filter((item) => item.id === action.payload.id ? action.payload : item);
            console.log(temp)
            return {
                ...state,
                hashtagItems: temp
            };

        default:
            return state;
    }
}
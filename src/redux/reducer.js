import { ADD_TODO } from './actionTypes';

const initialState = {
    todo: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };

        default:
            return state;
    }
}
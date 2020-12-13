import { ADD_TODO, COMPLETE_TODO } from './actionTypes';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

export const completeTodo = (payload) => ({
    type: COMPLETE_TODO,
    payload
})


import { ADD_TODO, COMPLETE_TODO, REMOVE_ALL_TODO, LOAD_FROM_LOCAL, ADD_HASHTAG_ITEM, CHANGE_HASHTAG_ITEM, UPDATE_HASHTAG_VALUE } from './actionTypes';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

export const completeTodo = (payload) => ({
    type: COMPLETE_TODO,
    payload
})

export const removeAllTodo = () => ({
    type: REMOVE_ALL_TODO
})

export const loadFromLocal = (payload) => ({
    type: LOAD_FROM_LOCAL,
    payload
})

export const addHashtagItem = (payload) => ({
    type: ADD_HASHTAG_ITEM,
    payload
})

export const changeHashtagItem = (payload) => ({
    type: CHANGE_HASHTAG_ITEM,
    payload
})

export const updateHashtagValue = (payload) => ({
    type: UPDATE_HASHTAG_VALUE,
    payload
})


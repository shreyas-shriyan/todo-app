import React from 'react'
import styles from './style.module.css'
import { addTodo, completeTodo } from '../redux/actions'
import { useDispatch } from 'react-redux';

export default function PendingItem(props) {
    let { data } = props
    let dispatch = useDispatch()

    const handleComplete = () => {
        let temp = { ...data, completed: new Date() }
        dispatch(completeTodo(temp))
    }

    return (
        <div className={styles.pendingItem} onClick={() => handleComplete()}>
            {data.todo}
        </div>
    )
}

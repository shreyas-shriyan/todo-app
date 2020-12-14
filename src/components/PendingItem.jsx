import React from 'react'
import styles from './style.module.css'
import { completeTodo } from '../redux/actions'
import { useDispatch } from 'react-redux';

export default function PendingItem(props) {
    let { data } = props
    let dispatch = useDispatch()

    //on clicking a todo item
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

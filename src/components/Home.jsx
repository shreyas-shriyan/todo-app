import React, { useState } from 'react'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions'
import PendingItem from './PendingItem'
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    let [input, setInput] = useState("")

    let dispatch = useDispatch()

    let pending = useSelector((state) => state.pending)

    const handleEnter = (e) => {
        let payload = {
            todo: input,
            created: new Date()
        }
        if (e.charCode === 13) {
            dispatch(addTodo(payload))
            setInput("")
        }

    }

    return (
        <div className={styles.flex}>
            <div className={styles.mainCard}>
                <input value={input} onKeyPress={(e) => handleEnter(e)} onChange={(e) => setInput(e.target.value)} className={styles.input}></input>

                <div className={styles.pending}>
                    <h3>Pending</h3>
                    <div>
                        {pending.sort((a, b) => b.created - a.created).map((item) => <PendingItem key={uuidv4()} data={item} ></PendingItem>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

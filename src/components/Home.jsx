import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeAllTodo, loadFromLocal } from '../redux/actions'
import PendingItem from './PendingItem'
import CompletedItem from './CompletedItem'
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    let [input, setInput] = useState("")

    let dispatch = useDispatch()

    let pending = useSelector((state) => state.pending)
    let completed = useSelector((state) => state.completed)

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("todoData"))
        if (data) {
            dispatch(loadFromLocal(data))
        }
    }, [])

    const handleEnter = (e) => {
        let payload = {
            id: uuidv4(),
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

                <div className={styles.resetContainer}>
                    <div className={styles.resetButton} onClick={() => dispatch(removeAllTodo())}>Reset</div>
                </div>

                <input value={input} onKeyPress={(e) => handleEnter(e)} onChange={(e) => setInput(e.target.value)} className={styles.input}></input>

                <div className={styles.pending} style={{ minHeight: "100px" }}>
                    <h3>{`Pending ${pending.length}`}</h3>
                    <div>
                        {pending.sort((a, b) => b.created - a.created).map((item) => <PendingItem key={uuidv4()} data={item} ></PendingItem>)}
                    </div>
                </div>

                <div className={styles.completed}>
                    <h3>{`Completed ${completed.length}`}</h3>
                    <div>
                        {completed.sort((a, b) => b.completed - a.completed).map((item) => <CompletedItem key={uuidv4()} data={item} ></CompletedItem>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

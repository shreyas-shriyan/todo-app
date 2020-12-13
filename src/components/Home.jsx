import React, { useState } from 'react'
import styles from './home.module.css'
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
    let [input, setInput] = useState("")

    const handleEnter = (e) => {
        if (e.charCode === 13) {
            console.log("pressed enter")

        }
    }

    return (
        <div className={styles.flex}>
            <div className={styles.mainCard}>
                <input value={input} onKeyPress={(e) => handleEnter(e)} onChange={(e) => setInput(e.target.value)} className={styles.input}></input>
                <div className={styles.pending}>
                    <div className={styles.heading}>Pending</div>
                </div>
            </div>
        </div>
    )
}

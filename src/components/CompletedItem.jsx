import React from 'react'
import styles from './style.module.css'

export default function CompletedItem(props) {
    let { data } = props

    return (
        <div className={styles.completedItem}>
            {data.todo}
        </div>
    )
}
import React from 'react'
import styles from './style.module.css'

export default function PendingItem(props) {
    let { data } = props
    return (
        <div className={styles.pendingItem}>
            {data.todo}
        </div>
    )
}

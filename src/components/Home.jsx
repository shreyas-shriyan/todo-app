import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeAllTodo, loadFromLocal, addHashtagItem } from '../redux/actions'
import PendingItem from './PendingItem'
import CompletedItem from './CompletedItem'
import Hashtag from './Hashtag'
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    let [input, setInput] = useState("")
    let [hashtagInput, setHashtagInput] = useState("#")

    let dispatch = useDispatch()

    let pending = useSelector((state) => state.pending)
    let completed = useSelector((state) => state.completed)
    let hashtags = useSelector((state) => state.hashtagItems)

    // to load data from localStorage 
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("todoData"))
        if (data) {
            dispatch(loadFromLocal(data))
        }
    }, [])

    // to add a new todo item
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

    //to add a new hashtag item
    const handleHashtagAdd = (e) => {
        let payload = {
            id: uuidv4(),
            hashtag: hashtagInput,
            selected: false
        }
        if (e.charCode === 13) {
            dispatch(addHashtagItem(payload))
            setHashtagInput("#")
        }
    }

    return (
        <div className={styles.flex}>
            <div className={styles.mainCard}>

                {/* reset button */}
                <div className={styles.resetContainer}>
                    <div className={styles.resetButton} onClick={() => dispatch(removeAllTodo())}>Reset</div>
                </div>

                <div className={styles.heading} >Todo App</div>

                <input value={input} placeholder="add todo" onKeyPress={(e) => handleEnter(e)} onChange={(e) => setInput(e.target.value)} className={styles.input}></input>

                {/* hashtag container */}
                <div className={styles.hashtag}>
                    <div>hashtag</div>
                    <input value={hashtagInput} placeholder="hashtag" onKeyPress={(e) => handleHashtagAdd(e)} onChange={(e) => setHashtagInput(e.target.value)} ></input>
                    <div style={{ display: "flex" }}>
                        {hashtags && hashtags.map((item) => <Hashtag key={uuidv4()} data={item}></Hashtag>)}
                    </div>
                </div>

                {/* pending items */}
                <div className={styles.pending} style={{ minHeight: "100px" }}>
                    <h3>{`Pending`}</h3>
                    <div>
                        {pending.filter((item) => {
                            let tags = hashtags && hashtags.filter((tag) => tag.selected === true).map((tag) => tag.hashtag.substring(1))
                            if (tags.length > 0) {
                                let temp = tags.some(word => item.todo.includes(word))
                                if (temp) {
                                    return true
                                }
                                else {
                                    return false
                                }
                            }
                            else {
                                return true
                            }
                        }).sort((a, b) => b.created - a.created).map((item) => <PendingItem key={uuidv4()} data={item} ></PendingItem>)}
                    </div>
                </div>

                {/* completed items */}
                <div className={styles.completed}>
                    <h3>{`Completed`}</h3>
                    <div>
                        {completed.filter((item) => {
                            let tags = hashtags && hashtags.filter((tag) => tag.selected === true).map((tag) => tag.hashtag.substring(1))
                            if (tags.length > 0) {
                                let temp = tags.some(word => item.todo.includes(word))
                                if (temp) {
                                    return true
                                }
                                else {
                                    return false
                                }
                            }
                            else {
                                return true
                            }
                        }).sort((a, b) => b.completed - a.completed).map((item) => <CompletedItem key={uuidv4()} data={item} ></CompletedItem>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

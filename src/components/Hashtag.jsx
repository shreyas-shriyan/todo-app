import React from 'react'
import { useDispatch } from 'react-redux';
import { changeHashtagItem } from '../redux/actions'

export default function Hashtag(props) {
    let dispatch = useDispatch()

    //handle hashtag click
    const handleClick = () => {
        let temp = props.data
        temp.selected = !temp.selected
        dispatch(changeHashtagItem(temp))
    }
    return (
        <div onClick={() => handleClick()} style={{ backgroundColor: `${props.data.selected ? "green" : "white"}`, borderRadius: "20px", padding: "5px", color: `${props.data.selected ? "white" : "black"}`, margin: "10px" }}>
            {props.data.hashtag}
        </div>
    )
}

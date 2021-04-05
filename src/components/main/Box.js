import React from 'react';
import style from "./style";
import {Link} from "react-router-dom";

function Box(props) {
    console.log(props)

    return (
        <Link to={`/product/${props.dt.name}`}>
        <div style={style.Box}>
            <img alt={""} style={style.Img} src={props.dt.img}/>
            <div style={style.desc}>
                <ul>
                    <li>Name: {props.dt.name}</li>
                    <li>Category: {props.dt.category}</li>
                    <li>Value: {props.dt.value}</li>
                </ul>
            </div>
        </div></Link>
    )
}
export default Box;
import React from 'react';
import style from "./style";
import {Link} from "react-router-dom";
import fire from "../../../Fire";

function Box(props) {

    const [desc, setDesc] = React.useState(style.desc);
    const [invis, vis] = React.useState(style.hide);

    const db = fire.firestore();

    React.useEffect(()=>{

        if(props.pdc.stock > 10)
        {
           setDesc(style.desc2)
        }
        else{
            setDesc(style.desc)
        }

    });

    function add (fireplace) {
        db.collection("Cart").add(fireplace).then(() => {
            console.log(fireplace);
        });
    }


    return (
        <Link to={`/product/${props.pdc.name}`} onClick={()=>vis(style.show)}>
            <div style={style.Box}>
                <img alt={""} style={style.Img} src={props.pdc.img}/>
                <div style={desc}>
                    <ul>
                        <li>Name: {props.pdc.name}</li>
                        <li style={invis}>Stock: {props.pdc.stock}</li>
                        <li style={invis}>Price: {props.pdc.price}</li>
                    </ul>
                    <button onClick={()=>add(props.pdc)}> add to cart  </button>
                </div>
            </div></Link>
    )
}
export default Box;
import React from 'react';
import style from "./style";
import {Link} from "react-router-dom";
import fire from "../../../Fire";

function Box(props) {

    const [desc, setDesc] = React.useState(style.desc);
    const [invis, vis] = React.useState(style.show);

    const db = fire.firestore();

    React.useEffect(()=>{

        if(props.pdc.stock > 10)
        {
           setDesc(style.desc2)
        }
        if(props.pdc.stock == 0){
            vis(style.hide)
        }
        else if(props.pdc.stock < 10 ){
            setDesc(style.desc)
        }

    });

    function add (fireplace) {
        db.collection("Cart").add(fireplace).then(() => {
            console.log(fireplace);
        });
    }


    return (

            <div style={style.Box}>
                <Link to={`/product/${props.pdc.name}`} onClick={()=>vis(style.show)}>
                    <img alt={""} style={style.Img} src={props.pdc.img}/></Link>
                <div style={desc}>
                    <ul>
                        <li>Name: {props.pdc.name}</li>
                        <li>Stock: {props.pdc.stock}</li>
                        <li>Price: {props.pdc.price}</li>
                    </ul>
                    <button style={invis} onClick={()=>add(props.pdc)}> add to cart  </button>
                </div>
            </div>
    )
}
export default Box;
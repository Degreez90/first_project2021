import React from "react";
import {Link} from 'react-router-dom';
import style from "./style/Style";

function Blocks(prop){

    const[setColor]=React.useState(prop.color);

    const box1 =(
        <div style={{marginTop: "10px", width:"100px", height:"100px", backgroundColor: "red"}}>
        </div>
    );

    const box2 =(
        <div style={{marginTop: "10px", width:"100px", height:"100px", backgroundColor: "green"}}>
        </div>
    );

    const box3 = (
        <div style={{marginTop: "10px", width:"100px", height:"100px", backgroundColor: "blue"}}>
        </div>
    );



    return(
        <div>
            <Link to={"/red/red"}>{box1}</Link>
            <Link to={"/red/green"}>{box2}</Link>
            <Link to={"/red/blue"}>{box3}</Link>
        </div>

    )
}

export default Blocks;
import React from 'react';
import style from "./Style";

function Rectangle(props) {

    const[mess,setMess]=React.useState("hello");
    const [gray, setGray]=React.useState(false);

    const grayOut= ()=>{
        setMess("Good Bye");
        setGray(true);

    };

    return (
        <div style={style.Box}>
            {gray===false&&<button onClick={grayOut}>{props.clk}</button>}
        </div>
    )
}
export default Rectangle;
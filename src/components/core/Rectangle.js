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
        </div>
    )
}
export default Rectangle;
import React from 'react';

function Block(props) {

    const[mess,setMess]=React.useState("hello");
    const[newColor,setColor]=React.useState(props.color);
    const [gray, setGray]=React.useState(false);

    const grayOut= ()=>{
        setColor("red");
        setMess("Good Bye");
        setGray(true);

    };

    const style={
        Box:{
            width:"100px",
            height:"100px",
            borderColor:"#000000",
            borderStyle:"solid",
            borderWidth:"1px",
            backgroundColor:"#215986"
        }

    };

    return (
        <div style={style.Box} onClick={grayOut}>
        </div>
    )
}
export default Block;
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
            borderColor:props.border,
            borderStyle:"dashed",
            borderWidth:"3px",
            backgroundColor:props.color
        }

    };

    return (
        <div style={style.Box} onClick={grayOut}>
        </div>
    )
}
export default Block;
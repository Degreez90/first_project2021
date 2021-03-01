import React from 'react';

function Block2(props) {
    const[color1, setColor]=React.useState(props.color);
    const[border1, setBorder]=React.useState(props.border);
    const [gray, setGray]=React.useState(false);

    const grayOut= ()=>{
        setColor("red");
        setBorder("blue");
        setGray(true);

    };

    const style={
        Box:{
            width:"100px",
            height:"100px",
            borderColor:border1,
            borderStyle:"dashed",
            borderWidth:"3px",
            backgroundColor:color1
        }

    };

    return (
       <div style={style.Box} onClick={grayOut}>
        </div>
    )
}
export default Block2;
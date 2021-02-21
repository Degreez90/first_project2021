import React from 'react';

function Box(props) {

    const[mess,setMess]=React.useState("hello");
    const [gray, setGray]=React.useState(false);

    const grayOut= ()=>{
        setMess("Good Bye");
        setGray(true);

    };

    return (
        <div>
           <h1>{mess}</h1>
            {gray===false&&<button onClick={grayOut}>{props.clk}</button>}
        </div>
    )
}
export default Box;
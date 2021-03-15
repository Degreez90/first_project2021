import React from 'react';

function Box(props) {

    const[mess,setMess]=React.useState("hello");
    const [gray, setGray]=React.useState(false);

    const grayOut= ()=>{
        setMess("Good Bye");
        setGray(true);

    };

    const grayOut2= ()=>(

        <div>
            <ul>
                <li>this</li>
            </ul>
        </div>

);

    return (
        <div>
            <h1>{mess}</h1>
            {grayOut2()}
            {gray===false&&<button onClick={grayOut}>{props.dt.name}</button>}
        </div>
    )
}
export default Box;
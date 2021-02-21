import React from "react";
function Box2(props) {

    const[mess,setMess]=React.useState(props.age);

    const count=()=>{
        setMess(mess +1);

    };

    return (
        <div>
            <h1>{props.name}</h1>
            <h1><p onClick={count}>{mess}</p></h1>
            <h1>The coolest Color is {props.color}</h1>
        </div>
    )
}
export default Box2;
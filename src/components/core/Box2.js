import React from "react";
function Box2(props) {

    const[num,setCount]=React.useState(props.age);

    const count=()=>{
        setCount(num +1);

    };

    return (
        <div>
            <h1>{props.name}</h1>
            <h1>I am <span onClick={count}>{num}</span></h1>
            <h1>The coolest Color is {props.color}</h1>
        </div>
    )
}
export default Box2;
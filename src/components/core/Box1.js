import React from "react";
function Box1(props) {

    const[name,setMess]=React.useState("Mark Offitt");

    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    )
}
export default Box1;
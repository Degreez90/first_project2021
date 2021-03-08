import React from "react";
import Box from "../core/Box";

function Container(){
    const data =[
        {
            name:"clicker",
            message:"Hello there"
        },
        {
            name:"clickee",
            message:"Hi"
        }
    ];

    let buttons = data.map((dt,idx)=>
        <Box key={idx} dt={dt}/>
        // <div key={idx}>{dt.name}</div>
    );

    return(
        <div className="container">
            {buttons}
        </div>
    )
}

export default Container;
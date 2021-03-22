import React from "react";
import {Link} from 'react-router-dom';
import People from "./People";

function Data(){

    const data = [{
        name:"Jake", age: 28, color:"Orange", id: 1
        },
        {
            name:"Mark", age: 31, color:"Teal", id: 2
        },
        {
            name:"Chris", age: 25, color:"Blue", id: 3
        }
        ];


    let list = data.map((ch, idx) =>
            // <div key={idx}>
            //     <ul>
            //         <li style={{display:"inline-block", marginRight:"10px"}}>Name: {ch.name} </li>
            //         <li style={{display:"inline-block", marginRight:"10px"}}>Age: {ch.age}</li>
            //         <li style={{display:"inline-block", marginRight:"10px"}}>Color: {ch.color}</li>
            //         <li style={{display:"inline-block", marginRight:"10px"}}>Id: {ch.id}</li>
            //     </ul>
            // </div>
        <People key={idx} ch={ch} />
    );

    return(
        <div>
            <Link to={"/data/id"}>{list}</Link>
        </div>

    )

}

export default Data;
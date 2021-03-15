import React from "react";

function Red(props){


    return(
        <div style={{height:"100vh", width:"100%", backgroundColor:props.match.params.id, overflow:"hidden"}}>
        </div>

    )

}

export default Red;
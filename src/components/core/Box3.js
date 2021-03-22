import React from "react";

function Box3(props){

    const[id, setId]=React.useState(props.dt.id)

    const style={
        Box:{
            marginTop:"10px",
            width:"100px",
            height:"100px",
            borderColor:"#000000",
            borderStyle:"solid",
            borderWidth:"1px",
            backgroundColor:"#215986"
        }

    };

    return(
        <div style={style.Box}>
            {id}
        </div>

    )

};

export default Box3;
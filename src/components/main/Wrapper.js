import React from "react";
import data from "./Data";
import style from "./style";
import Box from "./Box";

function Wrapper(){

    const [view, setData] = React.useState(data);

    const product = view.map((dt,idx)=>
        <Box key={idx} dt={dt}/>
        );

    const filter = (p)=>{
        if(p === "animation") {
            const newData = data.filter(n => n.category === "animation")
            setData(newData);
        }
        if(p === "games"){
            const newData = data.filter(n => n.category === "games")
            setData(newData);
        }
        if(p === "television"){
            const newData = data.filter(n => n.category === "television")
            setData(newData);
        }
    }

    return(
        <div>
            <div style={style.Nav}>
            <button style={style.Button} onClick={()=>filter("animation")}>This</button>
            <button style={style.Button} onClick={()=>filter("games")}>That</button>
            <button style={style.Button} onClick={()=>filter("television")}>N the Third</button>
            </div>
        <div style={style.Wrapper}>
            {product}
        </div>
        </div>
    )
}
export default Wrapper;
import React from "react";
import Box3 from "../core/Box3";

function Container2(){

    const [data,setData] =React.useState([
        {box: 1}
    ]);

    const{id, setId}= React.useState(1);
    const [count, setCount]= React.useState(0);
    const [color, setColor]= React.useState("#215986")

    const addBox = ()=>{
        // setCount(count +1);
        setData([...data, {box:2}]);
    }

    const clearBox = ()=>{
        setCount(0);
       const newBox = data.filter (n => n.box !== 2)
        setData(newBox);
    }

    const cameleon = ()=>{
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setColor(color);


    }

    const style={
        Box:{
            marginTop:"10px",
            width:"100px",
            height:"100px",
            borderColor:"#000000",
            borderStyle:"solid",
            borderWidth:"1px",
            backgroundColor: color
        }

    };

    const [visual, setVisual]= React.useState(data);
    const [add, setAdd]= React.useState(data);

//useEffect
    React.useEffect(()=>{
        let newArray;

        if(count % 2 == !0){
            addBox();
        }else if(count==="this"){
            clearBox();
        } if(count % 5 == 0){
            cameleon();
        }
        else{
            newArray=data;
        }


        setVisual(newArray);

    },[count]);



    // React.useEffect(()=>{
    //     let newArray;
    //
    //     if(add==="one"){
    //         setCount(count + 1)
    //         newArray=data.filter(function(it) {
    //             return it.name.includes("w");
    //         });
    //     }else if(add==="two"){
    //         newArray=data.filter(function(it) {
    //             return it.name.includes("g");
    //         });
    //     }else{
    //         newArray=data;
    //     }
    //
    //
    //     setVisual(newArray);
    //
    // },[add]);

    let display = data.map((dt,idx)=>
        <div key={idx} style={style.Box}></div>
    );

    return(
        <div>
            <button onClick={()=>setCount(count +1)}>Add</button>
            <button onClick={()=>setCount("this")}>Clear</button>
            <div>{count}</div>
            {display}
        </div>
    )
}

export default Container2;
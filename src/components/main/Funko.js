import React from 'react';
import style from "./style";
import {Link} from "react-router-dom";
import data from "./Data";
import Box from "./Box";

function Funko(props) {

    const [name] = React.useState(props.match.params.details);
    const [view, setData] = React.useState(data);

    const details = view.map((dt,idx)=>
        <Box key={idx} dt={dt}/>
    );

    const renderDetails = ()=>{
        const newData = data.filter(n => n.name === name )
        setData(newData);
    };

    console.log(view)

    React.useEffect(()=>{
        if(data.filter(n => n.name === name))
        {
            renderDetails();
        }

    });

    return (
        <div>
            <div style={style.Nav}>
                <Link to={"/"}><button style={style.Button}>Home</button></Link>
            </div>
            <div style={style.Wrapper}>
                <div>{details}</div>
            </div>
        </div>
    )
}
export default Funko;
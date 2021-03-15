import React from "react";
import {Link} from 'react-router-dom';

function People(props){

    const[mess,setMess]=React.useState(props.ch.id);


    return(
        <div>
            {mess}
        </div>

    )

}

export default People;
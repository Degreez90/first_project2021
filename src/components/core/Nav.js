import React from 'react';

function Box(props) {

    const[mess,setMess]=React.useState("hello");
    const [gray, setGray]=React.useState(false);

    const grayOut= ()=>{
        setMess("Good Bye");
        setGray(true);

    };

    return (
        <nav>
           <ul class="nav">
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
           </ul>
        </nav>
    )
}
export default Box;
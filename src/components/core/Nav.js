import React from 'react';
import {Link} from "react-router-dom";

function Nav() {


    return (
        <nav>
           <ul class="nav">
               <Link exact to={"/"}><li>Home</li></Link>
               <Link to={"/data"}> <li>Objects</li></Link>
               <Link to={"/cool"}><li>Cool</li></Link>
           </ul>
        </nav>
    )
}
export default Nav;
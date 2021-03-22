import React from 'react';
import {Link} from "react-router-dom";

function Nav() {


    return (
        <nav>
           <ul class="nav">
               <Link exact to={"/"}><li><button>Counter</button></li></Link>
               <Link to={"/data"}><li><button>Reset</button></li></Link>
           </ul>
        </nav>
    )
}
export default Nav;
import React from "react";
import {Link} from 'react-router-dom';
function Nav() {

    return(
        <div>
            <ul >
                <li >
                    <Link to="/attribute">Manage Attribute</Link>
                </li>&nbsp;&nbsp;
                <li>
                    <Link to="/brand">Manage brand</Link>
                </li>&nbsp;&nbsp;
                <li>
                    <Link to="/category">Manage category</Link>
                </li>&nbsp;&nbsp;
                <li>
                    <Link to="/company">Manage company</Link>
                </li>&nbsp;&nbsp;
                <li>
                    <Link to="/group">Manage group</Link>
                </li>&nbsp;&nbsp;

                <li>
                    <Link to="/order">Manage order</Link>
                </li>&nbsp;&nbsp;
                <li>
                    <Link to="/product">Manage product</Link>
                </li>&nbsp;&nbsp;
                <li>&nbsp;
                    <Link to="/store">Manage store</Link>
                </li>&nbsp;&nbsp;
                <li>&nbsp;
                    <Link to="/user">Manage user</Link>
                </li>
            </ul>
        </div>
    
    )
    
}
export default Nav;
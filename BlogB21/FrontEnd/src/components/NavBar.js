import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return ( 
            <div >
            <nav className="nav nav-tabs nav-fill"> 
               <Link className="nav-link" to="/">Home</Link> 
               <Link className="nav-link" to="/about">About</Link> 
               <Link className="nav-link" to="/articles">Articles</Link> 
            </nav>
            </div>
        );
    }
}

export default NavBar;
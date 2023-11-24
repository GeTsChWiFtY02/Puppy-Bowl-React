import React from "react";

//import Link from react-router-dom
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div className="navbar">
            <h3>Puppy Bowl</h3>
            <Link to="/" className="home">Home</Link>
            
        </div>
    )
}

export default Navbar;

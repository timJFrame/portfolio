import React from 'react'
import {Link} from 'react-router-dom'



function NavBar(){
    return(
    <>
    <nav>
    <button className="button button-outline"><Link to="/">HOME</Link></button>
    <button className="button button-outline"><Link to="/projects">Projects</Link></button>
    <button className="button button-outline"><Link to="/about">about</Link></button>
    </nav>
    </>

    )
}

export default NavBar
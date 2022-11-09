import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
export const Navbar = () => {
  
  const [isActive,setActive]=useState(1); 
  return (
    <nav>
        <ul>
            <Link to="/"  className={isActive?'activeTab':""} onClick={()=> setActive(1)}> 
                    <center>
                   Home
                    </center>
            </Link>
            <Link to="/search" className={(!isActive)?'activeTab':""} onClick={()=> setActive(0) } >
                    <center>
                     Search
                    </center>
            </Link>
        </ul>
    </nav>
  )
}

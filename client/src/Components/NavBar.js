import React from 'react'
import { Link } from 'react-router-dom';


function NavBar() {
  return (    
    <nav>
    <Link to='/' > Home   </Link>
    <Link to='/searchtweet' > Search Tweet   </Link>
    <Link to='randomtweet' > Random Tweet   </Link>
    </nav>
  )
}

export default NavBar

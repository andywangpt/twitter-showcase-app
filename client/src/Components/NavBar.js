import React from 'react'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
        
          <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className='navbar-nav ml-auto'>
              <li className='navbar-item gap-3'>
                <Link className='nav-link' to='/' ><h2>home</h2>   </Link>
              </li>
              <li className='navbar-item'>
                <Link className='nav-link' to='/searchtweet' ><h2>search tweets</h2></Link>
              </li>
              <li className='navbar-item'>
                <Link className='nav-link' to='randomtweet' ><h2>random tweets</h2></Link>
              </li>
          </ul>
        </div>
    </nav>
  )
}

export default NavBar

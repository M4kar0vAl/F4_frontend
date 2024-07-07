import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul className='nav-list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/recipes'>Recipes</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
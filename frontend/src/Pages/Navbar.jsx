import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',marginLeft:'10px'}}>
      <ul style={{textDecoration:'none'}}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/login'}>login</Link></li>
        <li><Link to={'/signup'}>signup</Link></li>
      </ul>
    </div>
  )
}

export default Navbar

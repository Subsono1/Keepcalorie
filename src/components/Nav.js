import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <header>
      <nav>
        
        <Link to="/" className="brand">Keepcalorie</Link>
        <Link to="/entries" >Entries</Link>
        <Link to="/resources">Resources</Link>
      </nav>
      
  </header>
  )
}







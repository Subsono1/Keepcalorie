import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <header>
      <nav>
        
        <Link to="/form" className="brand">Keepcalorie</Link>
        <Link to="/entries" className="entries-link">Entries</Link>
        <Link to="/resources"className="resources-link">Resources</Link>
      </nav>
      
  </header>
  )
}







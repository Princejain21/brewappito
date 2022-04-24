import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white">&#9776;</span>
    </button>
    <div className="collapse navbar-collapse justify-content-around  " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/entertainment">Entertainment</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  )
}

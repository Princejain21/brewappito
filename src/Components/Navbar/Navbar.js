import React from 'react'
import './nav.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white">&#9776;</span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#F">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#F">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#F">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#F">Disabled</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#F">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#F">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#F">home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#F">Disabled</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#F">contact</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

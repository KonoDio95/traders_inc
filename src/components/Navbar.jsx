import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Toggle } from './Toggle';

const Navbar = ({ dark, setDark }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
      <div className="container-fluid">
        <a style={{ minWidth: '30%' }} className="navbar-brand" href="/">
          <img width={50} src="/imgs/download.png" alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
          <form style={{ minWidth: '50%' }} action="" method="post">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Procurar..." />
              <button className="btn btn-success" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Toggle 
              isChecked={dark}
              handleChange={() => setDark(!dark)}
              />
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contato</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link">Equipe</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="bi bi-person-circle fs-4"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
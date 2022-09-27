import React from 'react'

export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="logo text-light navbar-brand" href="#">{props.logo}<span>{props.logo2}</span></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="text-light nav-link active" aria-current="page" href="#">Home</div>
              </li>
              <li className="nav-item">
                <div className="text-light nav-link" href="#">About</div>
              </li>
              <li className="nav-item dropdown">
                <div className="text-light nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nature
                </div>
                <ul className="dropdown-menu">
                  <li><div className="dropdown-item" href="#">Helping</div></li>
                  <li><div className="dropdown-item" href="#">Chill</div></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><div className="dropdown-item" href="#">Calm</div></li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

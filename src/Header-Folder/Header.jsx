import React from 'react'
import { Link} from 'react-router-dom'
export default function 
() {
  
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-transperant navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link" to="home">Home</Link>
        
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="movies">Movies</Link>
        
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="tv">TV</Link>
        
        </li>
     
      
        
      </ul>
      <ul className="navbar-nav  mb-2 mb-lg-0">
       
        <li className="nav-item d-flex   order-lg-first order-last align-items-center">
        <i className="fa-brands fa-soundcloud mx-2"></i>
        <i className="fa-brands fa-facebook mx-2"></i>
        <i className="fa-brands fa-instagram mx-2"></i>
        <i className="fa-brands fa-twitter mx-2"></i>
  
        
        </li>
     
        <li className="nav-item order-lg-last order-first">
        <Link className="nav-link" to="login">Login in</Link>
        
        </li>
        <li className="nav-item order-lg-last order-first">
        <Link className="nav-link" to="register">Register</Link>
        
        </li>
        <li className="nav-item order-lg-last order-first">
          <Link className="nav-link" to="logout">Logout</Link>
        
        </li>
      
        
      </ul>
      
      
    </div>
  </div>
</nav>
    </>
  )
}

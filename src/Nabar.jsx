import React from 'react'
import { Link } from 'react-router-dom'

const Nabar = () => {
  return (
<nav class="navbar  ">
  <div class="container-fluid bg-body-tertiary p-3  ">
    <a class="navbar-brand" href="#">HOSTLER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">HOSTLER</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
             <li class="nav-item"  data-bs-dismiss="offcanvas" aria-label="Close">
     <Link to="/"><a class="nav-link"  href="#">Home</a></Link>
          </li>
          <li class="nav-item"  data-bs-dismiss="offcanvas" aria-label="Close">
     <Link to="/menu"><a class="nav-link" href="#">Menu</a></Link>
          </li>
         
            <li class="nav-item"  data-bs-dismiss="offcanvas" aria-label="Close">
     <Link to="/sharing"><a class="nav-link" href="#">Price Sharing</a></Link>
          </li>
        </ul>

        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
         
         
        </ul>
    
      </div>
    </div>
  </div>
</nav>
  )
}

export default Nabar
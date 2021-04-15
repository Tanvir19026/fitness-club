import React from "react";

const Navbar = () => {
  return (
      <div className="d-flex mr-5"  style={{backgroundColor:'black',width:'100%'}}>
      <h2 style={{color:'grey',marginLeft:'20px',fontWeight:'600',marginTop:'5px'}}>Fitness<span style={{color:'red'}}>Club</span></h2>
    <nav class="navbar navbar-expand-lg navbar-light" style={{marginLeft:'180px'}}>
     

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link mr-5 active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 text-light" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 text-light" href="#">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 text-light" href="#">
              Reviews
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 text-light" href="#">
              Prices
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 text-light" href="#">
             Reviews
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 text-light" href="#">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;

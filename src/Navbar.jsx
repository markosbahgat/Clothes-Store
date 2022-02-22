import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/Icons/fontawesome-free/css/all.css';
import './App.css';


class Nav extends Component {
    
    
    
    render() { 
        return ( 
      <nav className="navbar navbar-expand-lg navbar-light  w-100" id="navbartop">
              <div className="container-fluid mt-2 mb-2 fs-5">
                <a className="navbar-brand col-2 ms-5" href="#"><img src="./index.png" className="mx-5 col-7 img-fluid " alt="..."/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontFamily:"Poppins" ,fontWeight:"500", fontSize:"16px"}}>
                    <li className="nav-item">
                      <a className="nav-link active ms-5 me-3" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hot & New
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" >Action</a></li>
                        <li><a className="dropdown-item" >Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a className="dropdown-item" >Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <a  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <i className="fas fa-shopping-cart me-4"></i>
                  </a>
                  <i className="far fa-heart me-4"></i>
                  <a href="/Auth"><i class="fas fa-user"></i></a>
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
                </div>
            </div>
      </nav>
         );
    }
}
 
export default Nav;
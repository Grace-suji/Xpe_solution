import React,{useState} from 'react'
import logoimg from "../../assets/logo-2.png"
import { FaSearch, FaTimes } from 'react-icons/fa';
import "../Navbar/Navbar.css"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearchBar = () => {
      setIsVisible(!isVisible);
  };

  const closeSearchBar = () => {
      setIsVisible(false);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <img class="navbar-brand" src={logoimg} alt="logoimg"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
      <li class="nav-item dropdown" style={{paddingLeft:"10px"}}>
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft:"10px"}}>
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft:"10px"}}>
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown"style={{paddingLeft:"10px"}}>
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Projects
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{paddingLeft:"10px"}}>
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       <li class="nav-item" style={{paddingLeft:"10px"}}>
          <a class="nav-link text-white" href="#">Contact</a>
        </li>
        <li  className="searchbar" style={{ color: 'white', paddingTop: '5px', fontSize: '18px', paddingLeft: '10px'}} onClick={toggleSearchBar}>
                                <FaSearch />
                            </li>
      </ul>
      
      <form class="d-flex">
        
        <button class="btn " type="submit">Get Started <i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </form>
    </div>
  </div>
</nav>
<div className={`search-bar ${isVisible ? 'active' : ''}`}>
                <input type="text" placeholder="Search Here" />
                <button className="close-btn" onClick={closeSearchBar}>
                    <FaTimes />
                </button>
                {/* <button className="up-arrow">
                    <i className="fa fa-arrow-up"></i>
                </button> */}
            </div>
    </div>
  )
}



export default Navbar

import React from 'react'
import Nezha from '../assets/Nezha.jpg'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'

function Header() {
  return (
    <>
    <div className='header'>
        <div className="container">
      <div className="image col-md-7">
        <img src={Nezha} alt="Nezha" />
      </div>
      <div className="content col-md-5">
        <div className="text-container">
          <h1>Welcome to Our Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, velit eu mollis tristique, libero velit lacinia velit, non convallis metus purus eu purus.</p>
          <button className='btn'><Link to="/projects" className="menu-link">Projects</Link></button>
        </div>
      </div>
    </div>
    </div>
      <Footer />
    </>
  )
}

export default Header
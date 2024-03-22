// components/Home.js
import React from 'react';
import Signup from '../Signup/Registration'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="header">
         
          <h3 className='sign'><Link to="/signup">Sign up</Link></h3>
          <h3 className='question'>Do you already have an account? <Link to="/login">Log in</Link></h3>
       </div>
       <div className='title_1'>
        <h2>Welcome to Our Platform!</h2>
        </div>
        <p className='description'>Explore a world of possibilities with our innovative platform. Whether you're here to discover new opportunities, connect with like-minded individuals, or simply stay informed, we've got you covered. Our home page serves as a gateway to a wealth of resources and features designed to enrich your experience. From engaging content to powerful tools, find everything you need to thrive in one convenient location. Join us today and embark on a journey of growth, discovery, and success.</p>
    </div>
  );
}

export default Home;

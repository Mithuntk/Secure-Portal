import React from 'react';
import './Profile.css'
import {Link} from 'react-router-dom'

function profile({ username }) {
  return (
    <div className='profile'>
        <div>
        <h3><Link className='header' to="/login">Log out</Link></h3>
        </div>
      <h2 className='title_1'>Welcome, {username}!</h2>
      <p className='title_2'>Our platform offers a seamless and secure login and signup experience, designed with your convenience and privacy in mind. Whether you're a new user looking to create an account or an existing member ready to access your personalized dashboard, our intuitive interface makes it easy to get started. With robust authentication measures in place, you can trust that your information is protected every step of the way. Join us today and unlock exclusive features tailored just for you.</p>
      {/* Add more profile details or actions here */}
    </div>
  );
}

export default profile;

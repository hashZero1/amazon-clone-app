import React from 'react'
import SignInForm from '../Components/SignInForm';
import SignInComponent from '../Components/SignInComponent';
import './AuthStyles.scss'
export default function AuthComponent() {
    return (
        <div className='container'>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG2.png"
          alt="logo"
          className="login-logo"
        />
        <div className='forms'>
          <SignInComponent />
        
        </div>
       
      </div>
    )
} 
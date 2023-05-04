import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../Firebase/FirebaseUtils';
import './SignInFormStyles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignInForm(){
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    //if password matches check the user whether its new user or not
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  //to revert back to empty form
    setFormFields(defaultFormFields);
  };
//controlled input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='container1'>
       <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG2.png"
          alt="logo"
          className="login-logo"
        />
      <div className='signin-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
          placeholder='UserName'
        />
    
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
          placeholder='Email'
        />
     
        <input
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
          placeholder='Password'
        />
     
        <input
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          placeholder='Confirm Password'
        />
        <button type='submit'>Sign Up</button>
      </form>
      </div>
     
    </div>
  );
};

export default SignInForm;
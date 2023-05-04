import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, SignInAuthUserWithEmailAndPassword } from '../Firebase/FirebaseUtils';
import './SignInComponentStyles.scss';
import { Link } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInComponent(){
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password} = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
//to check the auth whether user is exist or password match
    try{
        const response = await SignInAuthUserWithEmailAndPassword(email,password);
        console.log(response);
    }catch(err){
        if(err.code === 'auth/wrong-password'){
        alert("incorrect password");
        }
        if(err.code === 'auth/user-not-found'){
        alert("user not found");
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
    <div className='main-container'>
 <div className='sign-up-container'>
      <h2>Sign in</h2>
      <span className='form-text'>Sign up with your email and password</span>
      <form className='forms-container' onSubmit={handleSubmit}>
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
        <div className='signin-button'>
        <button type='submit'>Sign in</button>
        {/* <button type='button' onClick={signInWithGoogle}>Sign in with google</button> */}
        </div>
        
      </form>
     <p>By continuing, you agree to Amazon's<span> Condition of Use</span> and <span>Privacy Notice.</span> </p>
    </div>
    <p className='new-text'>new to amazon?</p>
    <Link className='new-link' to='/create'>
        <p>Don't have an account</p>
      </Link>
    </div>
   
  );
};

export default SignInComponent;
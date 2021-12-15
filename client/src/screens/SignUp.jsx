import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/signup.css'

export default function SignUp({ handleSignup }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>

      <div className='signup-title-div'>
        <h3>SIGN UP</h3>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup(formData);
        }}
      >
        <div className='signup-form-contain'>
          <span className='slable'>
            USERNAME
          </span><br />
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
          <br />
          <span className='slable'>
            EMAIL
          </span><br />
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <br />
          <span className='slable'>
            PASSWORD
          </span><br />
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <button>SUBMIT</button>
        </div>

        <Link to='/'>
        <button className='home-button'>HOME</button>
      </Link>


        <div className='roaster-div'>
          <img className='roaster' src='./images/roast_signup.png' alt='alchemist roasting coffee' />
        </div>

      </form>
    </div>
  )
}
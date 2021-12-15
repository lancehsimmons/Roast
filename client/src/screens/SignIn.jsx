import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/sign-in.css'

export default function SignIn({ handleSignIn }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>

      <h1>OAST</h1>
      <div>
        <h3 className='tagline'>Perfect your Home Roasts</h3>
      </div>
      <div className='descriptor-div'>
        <p className='descriptor'>A dynamic, precision log</p>
        <p className='descriptor'>     for home coffee roasting</p>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleSignIn(formData);
      }}>
        <div className='sign-in-label-flex-contain'>
          <div className='sign-in-label-div'>
            <div className='sign-in-text-div'>
            <h5>SIGN IN</h5>
            </div>
          </div>
        </div>

        <div className='input-div'>
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
            PASSWORD
          </span><br />
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <br />
          <div className='submit-button-div'>
            <button>SUBMIT</button>
          </div>
        </div>
      </form>
      <div className='signup-div'>
        <Link to='/sign-up'>
          <button>SIGN UP</button>
        </Link>
      </div>
    </div>
  )
}


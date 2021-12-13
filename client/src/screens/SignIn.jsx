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
      <div className='descriptor-div'>
        <p className='descriptor'>A dynamic, precision log</p>
        <p className='descriptor'>     for home coffee roasting</p>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleSignIn(formData);
      }}>
        <h5>SIGN IN</h5>
        <div className='input-div'>
          <span>
            username
          </span><br/>
          <input
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
          />
          
          <br />
          <span>
            password
          </span><br/>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          <br />
          <button>Submit</button>
          <Link to='/sign-up'>
            <div>
            <button>Sign Up</button>
            </div>
          </Link>
        </div>
      </form>
    </div>
  )
}


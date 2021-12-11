import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import SignIn from '../components/SignIn'

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  return (
    <div>
      <h1>Home</h1>
      <SignIn handleLogin={handleLogin}/>
    </div>
  )
}

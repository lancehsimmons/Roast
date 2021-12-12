import SignIn from '../components/SignIn'

export default function Home({handleLogin}) {
  return (
    <div>
      <h1>Home</h1>
      <SignIn handleLogin={handleLogin} />
    </div>
  )
}

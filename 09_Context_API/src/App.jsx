import Login from './componenets/Login'
import Profile from './componenets/Profile'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>HELLO Ji</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome Foodie!</h2>
      <Signup/>
    </>
  )
}

export default App
import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [hasEntered, setHasEntered] = useState(false)

  if (!hasEntered) {
    return <WelcomeScreen onEnter={() => setHasEntered(true)} />
  }

  return <HomePage />
}

export default App

import { useState, useEffect } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [hasEntered, setHasEntered] = useState(() => {
    // Check localStorage for the user's state
    return localStorage.getItem('hasEntered') === 'true';
  });

  useEffect(() => {
    if (hasEntered) {
      localStorage.setItem('hasEntered', 'true');
    }
  }, [hasEntered]);

  if (!hasEntered) {
    return <WelcomeScreen onEnter={() => setHasEntered(true)} />
  }

  return <HomePage />
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Input from './pages/Input'
import Results from './pages/results'

function App() {
 

  return (
    <>
    <Input/>
     <Results/>
        
    </>
  )
}

export default App

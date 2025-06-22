import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiStepForm from './MultiStepForm'
import { BrowserRouter } from 'react-router-dom'
import Approuter from './router/Approuter'
import Nabar from './Nabar'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<BrowserRouter>
<Nabar/>
<Approuter />
</BrowserRouter>
</>
  )
}

export default App

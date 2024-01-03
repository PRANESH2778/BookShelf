import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div>
        <Table/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { UiCards } from './components/UiCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen bg-[#09090A] h-screen flex items-center justify-center">
      <UiCards />
    </div>
  )
}

export default App

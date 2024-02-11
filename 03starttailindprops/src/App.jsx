import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"jainSahab",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind CSS Test </h1>

      <Card username="jain Sahab" txtMe = "Click Me"/>
      <Card username="Atishay" txtMe = "Visite Me"/>
      

    </>
  )
}

export default App

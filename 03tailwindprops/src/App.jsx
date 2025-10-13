import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {


  return (
  <>
    <h1 className='bg-green-400 text-black m-1'>tailwind css</h1>
     <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
      
  </>
  )
}

export default App

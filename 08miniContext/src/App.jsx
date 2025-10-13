import { useState } from 'react'

import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>hii this is context api thing</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App  //step5

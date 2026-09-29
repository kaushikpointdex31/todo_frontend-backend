import React from 'react'
import Home from './pages/Home'
import UpdateModal from './components/UpdateModal'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<UpdateModal/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
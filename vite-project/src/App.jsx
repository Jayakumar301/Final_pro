import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import TabsPage from './components/TabsPage'
import PartA from './components/PartA'
import PartB from './components/PartB'
import PartC from './components/PartC'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage />} />
      <Route path="/partA" element={<PartA />} />
      <Route path="/partB" element={<PartB />} />
      <Route path="/partC" element={<PartC />} />
    </Routes>
  )
}

export default App
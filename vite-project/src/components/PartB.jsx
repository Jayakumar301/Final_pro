import React from 'react'
import { useNavigate } from 'react-router-dom'

const PartB = () => {
  const navigate = useNavigate()

  const handleNext = () => {
    navigate('/partC')
  }

  return (
    <div className="partB">
      <h2>Part B</h2>
      <p>Content for Part B</p>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  )
}

export default PartB
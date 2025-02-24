import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'

const HomePage = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('')
  const academicYears = ['Select an option', '2023-2024', '2024-2025', '2025-2026']
  const categories = ['Select an option', 'Professor', 'Associate Professor', 'Assistant Professor']

  const handleGenerateClick = () => {
    if (selectedCategory && selectedCategory !== 'Select an option') {
      navigate('/tabs', { state: { category: selectedCategory } })
    } else {
      alert('Please select a valid category')
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="home-page">
      <img
        className="top-image"
        src="/Bec_Logo.jpg"
        alt="Bapatla Engineernig College"
      />
      <div className="form-container">
        <Dropdown options={academicYears} label="Select Academic Year" />
        <Dropdown options={categories} label="Select Category" onChange={handleCategoryChange} />
      </div>
      <button className="generate-button" onClick={handleGenerateClick}>
        Generate
      </button>
    </div>
  )
}

export default HomePage
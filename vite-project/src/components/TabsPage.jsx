import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './tabsPageStyles.css'

const TabsPage = () => {
  const location = useLocation()
  const category = location.state?.category
  const [activeTab, setActiveTab] = useState('PartA')
  const navigate = useNavigate()

  useEffect(() => {
    if (category) {
      document.title = category
    }
  }, [category])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    navigate(`/${tab.toLowerCase()}`)
  }

  return (
    <div className="tabs-page">
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'PartA' ? 'active' : ''}`} 
          onClick={() => handleTabClick('PartA')}
        >
          Part A
        </button>
        <button 
          className={`tab-button ${activeTab === 'PartB' ? 'active' : ''}`} 
          onClick={() => handleTabClick('PartB')}
        >
          Part B
        </button>
        <button 
          className={`tab-button ${activeTab === 'PartC' ? 'active' : ''}`} 
          onClick={() => handleTabClick('PartC')}
        >
          Part C
        </button>
      </div>
    </div>
  )
}

export default TabsPage
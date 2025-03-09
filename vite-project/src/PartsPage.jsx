import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PartA from './PartA';
import PartB from './PartB';
import './App.css';

function PartsPage() {
  const [activeTab, setActiveTab] = useState('PartA');
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.category || '';

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const submitForm = () => {
    alert('Form Submitted!');
    navigate('/');
  };

  return (
    <div className="mytabs">
      <input type="radio" id="tab1" name="mytabs" checked={activeTab === 'PartA'} onChange={() => setActiveTab('PartA')} />
      <label htmlFor="tab1" className={activeTab === 'PartA' ? 'active' : ''}>Personal Information</label>
      <div className={`tab ${activeTab === 'PartA' ? 'active-tab' : ''}`}>
        <PartA category={category} openTab={openTab} />
      </div>

      <input type="radio" id="tab2" name="mytabs" checked={activeTab === 'PartB'} onChange={() => setActiveTab('PartB')} />
      <label htmlFor="tab2" className={activeTab === 'PartB' ? 'active' : ''}>Qualification</label>
      <div className={`tab ${activeTab === 'PartB' ? 'active-tab' : ''}`}>
        <PartB openTab={openTab} />
      </div>

      <input type="radio" id="tab3" name="mytabs" checked={activeTab === 'PartC'} onChange={() => setActiveTab('PartC')} />
      <label htmlFor="tab3" className={activeTab === 'PartC' ? 'active' : ''}>Questionnaire</label>
      <div className={`tab ${activeTab === 'PartC' ? 'active-tab' : ''}`}>
        <h2>Part C: Questionnaire</h2>
        <p>This is Part C content. Review and submit your information.</p>
        <div className="power-app-tab-buttons">
          <button type="button" onClick={() => openTab('PartB')}>Previous</button>
          <button type="button">Save</button>
          <button type="button" onClick={submitForm}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default PartsPage;
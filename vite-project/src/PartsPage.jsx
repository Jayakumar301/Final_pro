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
    <div className="PartsPage">
      <div className="tabs">
        <button className={`tab-link ${activeTab === 'PartA' ? 'active' : ''}`} onClick={() => openTab('PartA')}>PartA</button>
        <button className={`tab-link ${activeTab === 'PartB' ? 'active' : ''}`} onClick={() => openTab('PartB')}>PartB</button>
        <button className={`tab-link ${activeTab === 'PartC' ? 'active' : ''}`} onClick={() => openTab('PartC')}>PartC</button>
      </div>

      <div id="PartA" className={`tab-content ${activeTab === 'PartA' ? 'active' : ''}`}>
        <PartA category={category} openTab={openTab} />
      </div>

      <div id="PartB" className={`tab-content ${activeTab === 'PartB' ? 'active' : ''}`}>
        <PartB openTab={openTab} />
      </div>

      <div id="PartC" className={`tab-content ${activeTab === 'PartC' ? 'active' : ''}`}>
        <h2>Part C</h2>
        <p>This is Part C content. Review and submit your information.</p>
        <div className="tab-buttons">
          
          <button type="button">Save</button>
          <button type="button" onClick={submitForm}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default PartsPage;
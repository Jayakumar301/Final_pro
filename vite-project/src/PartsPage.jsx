import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PartA from './PartA';
import PartB from './PartB';
import { Tabs, Tab } from 'react-bootstrap';
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
    <div className="PowerAppPartsPage">
      <Tabs
        id="controlled-tab-example"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3 netflix-tabs"
      >
        <Tab eventKey="PartA" title="Step 1: Personal Info">
          <div className={`power-app-tab-content ${activeTab === 'PartA' ? 'active' : ''}`}>
            <PartA category={category} openTab={openTab} />
          </div>
        </Tab>
        <Tab eventKey="PartB" title="Step 2: Qualification">
          <div className={`power-app-tab-content ${activeTab === 'PartB' ? 'active' : ''}`}>
            <PartB openTab={openTab} />
          </div>
        </Tab>
        <Tab eventKey="PartC" title="Step 3: Questionnaire">
          <div className={`power-app-tab-content ${activeTab === 'PartC' ? 'active' : ''}`}>
            <h2>Part C</h2>
            <p>This is Part C content. Review and submit your information.</p>
            <div className="power-app-tab-buttons">
              <button type="button">Save</button>
              <button type="button" onClick={submitForm}>Submit</button>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default PartsPage;
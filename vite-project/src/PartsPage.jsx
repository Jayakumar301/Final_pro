import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PartA from './PartA';
import PartB from './PartB';
import PartC from './PartC';
import PartD from './PartD';
import PartE from './PartE';
import PartF from './PartF';
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

  const getProgressStepClass = (tabName) => {
    const tabs = ['PartA', 'PartB', 'PartC', 'PartD', 'PartE', 'PartF'];
    const currentIndex = tabs.indexOf(activeTab);
    const tabIndex = tabs.indexOf(tabName);
    return tabIndex <= currentIndex ? 'progress-step completed' : 'progress-step';
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="background-container"></div>
      <div className="mytabs">
        <div className="progress-container">
          <div className="progress-line"></div>
          {['PartA', 'PartB', 'PartC', 'PartD', 'PartE', 'PartF'].map(tab => (
            <div key={tab} className={getProgressStepClass(tab)}>
              <svg className="progress-step-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm320-320q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-320Z"/>
              </svg>
            </div>
          ))}
        </div>

        <div className="labels-container">
          {['PartA', 'PartB', 'PartC', 'PartD', 'PartE', 'PartF'].map(tab => (
            <React.Fragment key={tab}>
              <input type="radio" id={tab} name="mytabs" checked={activeTab === tab} onChange={() => setActiveTab(tab)} />
              <label htmlFor={tab} className={activeTab === tab ? 'active' : ''}>{tab}</label>
            </React.Fragment>
          ))}
        </div>

        <div className={`tab ${activeTab === 'PartA' ? 'active-tab' : ''}`}>
          <PartA category={category} openTab={openTab} />
        </div>
        <div className={`tab ${activeTab === 'PartB' ? 'active-tab' : ''}`}>
          <PartB openTab={openTab} />
        </div>
        <div className={`tab ${activeTab === 'PartC' ? 'active-tab' : ''}`}>
          <PartC openTab={openTab} />
        </div>
        <div className={`tab ${activeTab === 'PartD' ? 'active-tab' : ''}`}>
          <PartD openTab={openTab} />
        </div>
        <div className={`tab ${activeTab === 'PartE' ? 'active-tab' : ''}`}>
          <PartE openTab={openTab} />
        </div>
        <div className={`tab ${activeTab === 'PartF' ? 'active-tab' : ''}`}>
          <PartF openTab={openTab} />
        </div>
      </div>
    </div>
  );
}

export default PartsPage;
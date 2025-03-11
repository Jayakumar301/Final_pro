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

  const getProgressStepClass = (tabName) => {
    const tabs = ['PartA', 'PartB', 'PartC'];
    const currentIndex = tabs.indexOf(activeTab);
    const tabIndex = tabs.indexOf(tabName);
    return tabIndex <= currentIndex ? 'progress-step completed' : 'progress-step';
  };

  return (
    <div className="mytabs">
      <div className="progress-container">
        <div className="progress-line"></div>
        <div className={getProgressStepClass('PartA')}>
          <svg className="progress-step-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
          </svg>
        </div>
        <div className={getProgressStepClass('PartB')}>
          <svg className="progress-step-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
          </svg>
        </div>
        <div className={getProgressStepClass('PartC')}>
          <svg className="progress-step-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/>
          </svg>
        </div>
      </div>

      <div className="labels-container">
        <input type="radio" id="tab1" name="mytabs" checked={activeTab === 'PartA'} onChange={() => setActiveTab('PartA')} />
        <label htmlFor="tab1" className={activeTab === 'PartA' ? 'active' : ''}>Personal Information</label>

        <input type="radio" id="tab2" name="mytabs" checked={activeTab === 'PartB'} onChange={() => setActiveTab('PartB')} />
        <label htmlFor="tab2" className={activeTab === 'PartB' ? 'active' : ''}>Qualification</label>

        <input type="radio" id="tab3" name="mytabs" checked={activeTab === 'PartC'} onChange={() => setActiveTab('PartC')} />
        <label htmlFor="tab3" className={activeTab === 'PartC' ? 'active' : ''}>Questionnaire</label>
      </div>

      <div className={`tab ${activeTab === 'PartA' ? 'active-tab' : ''}`}>
        <PartA category={category} openTab={openTab} />
      </div>

      <div className={`tab ${activeTab === 'PartB' ? 'active-tab' : ''}`}>
        <PartB openTab={openTab} />
      </div>

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
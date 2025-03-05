import React from 'react';

function PartCAssistantProfessor({ submitForm, openTab }) {
  return (
    <div className="container">
      <h2 className="my-4">Part C - Assistant Professor</h2>
      <p>This is Part C content. Review and submit your information.</p>
      <div className="tab-buttons">
        <button type="button" onClick={() => openTab('PartB')} className="btn btn-secondary">Previous</button>
        <button type="button" className="btn btn-secondary">Save</button>
        <span style={{ margin: '0 10px' }}></span> {/* Gap */}
        <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default PartCAssistantProfessor;
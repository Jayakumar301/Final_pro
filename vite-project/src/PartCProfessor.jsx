import React from 'react';

function PartCProfessor({ submitForm, openTab }) {
  return (
    <div>
      <h2>Part C - Professor</h2>
      <p>This is Part C content. Review and submit your information.</p>
      <div className="tab-buttons">
        <button type="button" onClick={() => openTab('PartB')}>Previous</button>
        <button type="button">Save</button>
        <button type="button" onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
}

export default PartCProfessor;
import React from 'react';

function PartCAssistantProfessor({ openTab }) {
  return (
    <div>
      <h2>Part C: Assistant Professor</h2>
      <p>This is Part C content for Assistant Professor.</p>
      <button type="button" onClick={() => openTab('PartB')} className="btn btn-secondary">Previous</button>
          <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('PartD')}>Next</button>
    </div>
  );
}

export default PartCAssistantProfessor;
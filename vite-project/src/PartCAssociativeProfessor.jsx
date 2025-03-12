import React from 'react';

function PartCAssociativeProfessor({ openTab }) {
  return (
    <div>
      <h2>Part C: Associative Professor</h2>
      <p>This is Part C content for Associative Professor.</p>
      <button type="button" onClick={() => openTab('PartB')} className="btn btn-secondary">Previous</button>
          <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('PartD')}>Next</button>
    </div>
  );
}

export default PartCAssociativeProfessor;
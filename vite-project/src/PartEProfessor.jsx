import React from 'react';

function PartEProfessor({ openTab }) {
  return (
    <div>
      <h2>Part E: Professor</h2>
      <p>This is Part E content for Professor.</p>
      <button type="button" onClick={() => openTab('PartD')}>Previous</button>
      <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('PartF')}>Next</button>
    </div>
  );
}

export default PartEProfessor;
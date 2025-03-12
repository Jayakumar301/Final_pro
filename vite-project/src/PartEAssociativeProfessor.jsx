import React from 'react';

function PartEAssociativeProfessor({ openTab }) {
  return (
    <div>
      <h2>Part E: Associative Professor</h2>
      <p>This is Part E content for Associative Professor.</p>
      <button type="button" onClick={() => openTab('PartD')}>Previous</button>
      <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('PartF')}>Next</button>
    </div>
  );
}

export default PartEAssociativeProfessor;
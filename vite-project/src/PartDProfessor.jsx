import React from 'react';

function PartDProfessor({ openTab }) {
  return (
    <div>
      <h2>Part D: Professor</h2>
      <p>This is Part D content for Professor.</p>
      <button type="button" onClick={() => openTab('PartC')}>Previous</button>
          <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('PartE')}>Next</button>
    </div>
  );
}

export default PartDProfessor;
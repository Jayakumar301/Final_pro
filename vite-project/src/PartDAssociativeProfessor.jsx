import React from 'react';

function PartDAssociativeProfessor({ openTab }) {
  return (
    <div>
      <h2>Part D: Associative Professor</h2>
      <p>This is Part D content for Associative Professor.</p>
      <button type="button" onClick={() => openTab('PartC')}>Previous</button>
          <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('PartE')}>Next</button>
    </div>
  );
}

export default PartDAssociativeProfessor;
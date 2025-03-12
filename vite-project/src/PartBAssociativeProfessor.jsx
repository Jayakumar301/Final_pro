import React from 'react';

function PartBAssociativeProfessor({ openTab }) {
  return (
    <div>
      <h2>Part B: Associative Professor</h2>
      <p>This is Part B content for Associative Professor.</p>
      <button type="button" onClick={() => openTab('PartA')}>Previous</button>
          <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('PartC')}>Next</button>
    </div>
  );
}

export default PartBAssociativeProfessor;
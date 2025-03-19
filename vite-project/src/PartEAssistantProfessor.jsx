import React from 'react';

function PartEAssistantProfessor({ openTab }) {
  return (
    <div>
      <h5>Academic Administration,Institutional Duties and Extra Curricular Activities of Assistant Professor</h5>
      <p>This is Part E content for Assistant Professor.</p>
      <button type="button" onClick={() => openTab('Part-D')}>Previous</button>
      <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('Part-F')}>Next</button>
    </div>
  );
}

export default PartEAssistantProfessor;
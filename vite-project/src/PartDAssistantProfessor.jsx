import React from 'react';

function PartDAssistantProfessor({ openTab }) {
  return (
    <div>
      <h5>R&D Related Contributions of Assistant Professor</h5>
      <p>This is Part D content for Assistant Professor.</p>
      <button type="button" onClick={() => openTab('Part-C')}>Previous</button>
      <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('Part-E')}>Next</button>
    </div>
  );
}

export default PartDAssistantProfessor;
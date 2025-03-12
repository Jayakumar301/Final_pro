import React from 'react';
import { useNavigate } from 'react-router-dom';

function PartFAssociativeProfessor({ openTab }) {
  const navigate = useNavigate();

  const finishForm = () => {
    alert('Form Submitted!');
    navigate('/');
  };

  return (
    <div>
      <h2>Part F: Associative Professor</h2>
      <p>This is Part F content for Associative Professor.</p>
      <button type="button" onClick={() => openTab('PartE')}>Previous</button>
      <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={finishForm}>Finish</button>
    </div>
  );
}

export default PartFAssociativeProfessor;
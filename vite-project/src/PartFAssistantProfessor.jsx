import React from 'react';
import { useNavigate } from 'react-router-dom';

function PartFAssistantProfessor({ openTab }) {
  const navigate = useNavigate();

  const finishForm = () => {
    alert('Form Submitted!');
    navigate('/');
  };

  return (
    <div>
     <h5>Annual Confidential Report to be filled in by the HOD for Assistant Professor</h5>
      <p>This is Part F content for Assistant Professor.</p>
      <button type="button" onClick={() => openTab('Part-E')}>Previous</button>
      <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={finishForm}>Finish</button>
    </div>
  );
}

export default PartFAssistantProfessor;
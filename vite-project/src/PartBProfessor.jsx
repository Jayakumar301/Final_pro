import React from 'react';

function PartBProfessor({ openTab }) {
  return (
    <div>
      <h2>Part B - Professor</h2>
      <form>
        {/* Removed Research and Publications, Projects, and Conferences Attended sections */}
        <div className="tab-buttons">
          <button type="button" onClick={() => openTab('PartA')}>Previous</button>
          <button type="button" onClick={() => openTab('PartC')}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default PartBProfessor;
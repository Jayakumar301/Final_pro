import React from 'react';

function PartBProfessor({ openTab }) {
  return (
    <div>
      <h2>Part B - Professor</h2>
      <form>
        <label htmlFor="research">Research and Publications:</label>
        <textarea id="research" name="research" required></textarea>
        <br /><br />

        <label htmlFor="projects">Projects:</label>
        <textarea id="projects" name="projects" required></textarea>
        <br /><br />

        <label htmlFor="conferences">Conferences Attended:</label>
        <textarea id="conferences" name="conferences" required></textarea>
        <br /><br />

        <div className="tab-buttons">
          <button type="button" onClick={() => openTab('PartA')}>Previous</button>
          <button type="button" onClick={() => openTab('PartC')}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default PartBProfessor;
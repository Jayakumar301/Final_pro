import React from 'react';

function PartBAssistantProfessor({ openTab }) {
  return (
    <div className="container">
      <h2 className="my-4">Part B - Assistant Professor</h2>
      <form>
        <div className="form-group">
          <label htmlFor="research">Research and Publications:</label>
          <textarea id="research" name="research" className="form-control" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="projects">Projects:</label>
          <textarea id="projects" name="projects" className="form-control" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="conferences">Conferences Attended:</label>
          <textarea id="conferences" name="conferences" className="form-control" required></textarea>
        </div>
        <div className="tab-buttons">
          <button type="button" onClick={() => openTab('PartA')} className="btn btn-secondary">Previous</button>
          <button type="button" onClick={() => openTab('PartC')} className="btn btn-primary">Next</button>
        </div>
      </form>
    </div>
  );
}

export default PartBAssistantProfessor;
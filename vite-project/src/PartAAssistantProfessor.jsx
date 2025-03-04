import React, { useState } from 'react';

function PartBAssistantProfessor({ openTab }) {
  const [rows, setRows] = useState([{ subjectType: '', subjectCode: '', weeklyLoad: '', sem: '', subjectTitle: '' }]);

  const handleAddRow = () => {
    setRows([...rows, { subjectType: '', subjectCode: '', weeklyLoad: '', sem: '', subjectTitle: '' }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = rows.filter((row, i) => i !== index);
    setRows(newRows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  return (
    <div className="container">
      <h2 className="my-4">Part B - Assistant Professor</h2>
      <form>
        <div className="form-group">
          <label>1.1 Subjects:</label>
          <table className="table">
            <thead>
              <tr>
                <th>Subject Type</th>
                <th>Subject Code</th>
                <th>Weekly Load</th>
                <th>Sem</th>
                <th>Subject Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <select
                      name="subjectType"
                      value={row.subjectType}
                      onChange={(e) => handleChange(index, e)}
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      <option value="Theory">Theory</option>
                      <option value="Lab">Lab</option>
                      <option value="Tutorial">Tutorial</option>
                      <option value="TermPaper">Term Paper</option>
                      <option value="MiniProject">Mini Project</option>
                      <option value="MajorProject">Major Project</option>
                      <option value="Seminar">Seminar</option>
                      <option value="AnyOther">Any Other</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="subjectCode"
                      value={row.subjectCode}
                      onChange={(e) => handleChange(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="weeklyLoad"
                      value={row.weeklyLoad}
                      onChange={(e) => handleChange(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      name="sem"
                      value={row.sem}
                      onChange={(e) => handleChange(index, e)}
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      <option value="sem1">Sem 1</option>
                      <option value="sem2">Sem 2</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="subjectTitle"
                      value={row.subjectTitle}
                      onChange={(e) => handleChange(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow(index)} className="btn btn-danger">
                      Delete Row
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow} className="btn btn-success">Add Row</button>
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
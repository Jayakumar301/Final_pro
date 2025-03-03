import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PartAAssistantProfessor({ category, openTab }) {
  const [educationRows, setEducationRows] = useState([]);
  const [experienceRows, setExperienceRows] = useState([]);
  const location = useLocation();
  const department = location.state?.department || '';

  const addEducationRow = () => {
    setEducationRows([...educationRows, { programme: '', periodOfStudy: '', university: '', marksCGPA: '', classObtained: '' }]);
  };

  const handleEducationInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...educationRows];
    newRows[index][name] = value;
    setEducationRows(newRows);
  };

  const deleteEducationRow = (index) => {
    const newRows = [...educationRows];
    newRows.splice(index, 1);
    setEducationRows(newRows);
  };

  const addExperienceRow = () => {
    setExperienceRows([...experienceRows, { designation: '', institution: '', from: '', to: '' }]);
  };

  const handleExperienceInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...experienceRows];
    newRows[index][name] = value;
    setExperienceRows(newRows);
  };

  const deleteExperienceRow = (index) => {
    const newRows = [...experienceRows];
    newRows.splice(index, 1);
    setExperienceRows(newRows);
  };

  return (
    <div className="container">
      <h2 className="my-4">Part A - Assistant Professor</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="designation">AICTE Designation:</label>
          <input type="text" id="designation" name="designation" value={category} className="form-control" readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="department">Name of Department:</label>
          <input type="text" id="department" name="department" value={department} className="form-control" readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" className="form-control" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Details:</label>
          <input type="text" id="contact" name="contact" className="form-control" required />
        </div>

        <label>Education Qualification:</label>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Programme</th>
              <th>Period of Study</th>
              <th>University</th>
              <th>Marks/CGPA</th>
              <th>Class Obtained</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {educationRows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="programme"
                    value={row.programme}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="periodOfStudy"
                    value={row.periodOfStudy}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="university"
                    value={row.university}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="marksCGPA"
                    value={row.marksCGPA}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="classObtained"
                    value={row.classObtained}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <button type="button" onClick={() => deleteEducationRow(index)} className="btn btn-danger">Delete Row</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addEducationRow} className="btn btn-success mb-4">Create Row</button>

        <label>Experience:</label>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Designation</th>
              <th>Institution</th>
              <th>From</th>
              <th>To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {experienceRows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    name="designation"
                    value={row.designation}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="institution"
                    value={row.institution}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="from"
                    value={row.from}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="to"
                    value={row.to}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <button type="button" onClick={() => deleteExperienceRow(index)} className="btn btn-danger">Delete Row</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addExperienceRow} className="btn btn-success mb-4">Create Row</button>

        <div className="tab-buttons">
          <button type="button" className="btn btn-secondary">Save</button>
          <button type="button" onClick={() => openTab('PartB')} className="btn btn-primary">Next</button>
        </div>
      </form>
    </div>
  );
}

export default PartAAssistantProfessor;
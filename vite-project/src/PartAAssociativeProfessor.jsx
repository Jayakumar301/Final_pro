import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PartAAssociativeProfessor({ category, openTab }) {
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
    <div>
      <h2>Part A - Associative Professor</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br /><br />

        <label htmlFor="designation">AICTE Designation:</label>
        <input type="text" id="designation" name="designation" value={category} readOnly />
        <br /><br />

        <label htmlFor="department">Name of Department:</label>
        <input type="text" id="department" name="department" value={department} readOnly />
        <br /><br />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" required></textarea>
        <br /><br />

        <label htmlFor="contact">Contact Details:</label>
        <input type="text" id="contact" name="contact" required />
        <br /><br />

        <label>Education Qualification:</label>
        <table>
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
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="periodOfStudy"
                    value={row.periodOfStudy}
                    onChange={(e) => handleEducationInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="university"
                    value={row.university}
                    onChange={(e) => handleEducationInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="marksCGPA"
                    value={row.marksCGPA}
                    onChange={(e) => handleEducationInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="classObtained"
                    value={row.classObtained}
                    onChange={(e) => handleEducationInputChange(index, e)}
                  />
                </td>
                <td>
                  <button type="button" onClick={() => deleteEducationRow(index)}>Delete Row</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addEducationRow}>Create Row</button>
        <br /><br />

        <label>Experience:</label>
        <table>
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
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="institution"
                    value={row.institution}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="from"
                    value={row.from}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="to"
                    value={row.to}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                  />
                </td>
                <td>
                  <button type="button" onClick={() => deleteExperienceRow(index)}>Delete Row</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addExperienceRow}>Create Row</button>
        <br /><br />

        <div className="tab-buttons">
          <button type="button">Save</button>
          <button type="button" onClick={() => openTab('PartB')}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default PartAAssociativeProfessor;
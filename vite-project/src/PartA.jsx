import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PartA({ category, openTab }) {
  const [educationRows, setEducationRows] = useState([]);
  const [experienceRows, setExperienceRows] = useState([]);
  const location = useLocation();
  const department = location.state?.department || '';
  const [formData, setFormData] = useState({
    name: '',
    postHeld: '',
    employeeId: '',
    appointmentDate: '',
    address: '',
    contact: ''
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      alert('Please fill all the required fields.');
    }

    return Object.keys(newErrors).length === 0;
  };

  const saveFormData = async () => {
    if (!validateForm()) {
      setIsFormValid(false);
      return;
    }

    const data = {
      ...formData,
      department,
      category,
      educationRows,
      experienceRows
    };

    try {
      const response = await fetch('http://localhost:5000/save-parta-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert('PartA Data saved Successfully');
      setIsFormValid(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Part A</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        {errors.name && <span className="error">{errors.name}</span>}
        <br /><br />

        <label htmlFor="designation">AICTE Designation:</label>
        <input type="text" id="designation" name="designation" value={category} readOnly />
        <br /><br />

        <label htmlFor="department">Name of Department:</label>
        <input type="text" id="department" name="department" value={department} readOnly />
        <br /><br />

        <label htmlFor="postHeld">Post Held:</label>
        <input type="text" id="postHeld" name="postHeld" value={formData.postHeld} onChange={handleInputChange} required />
        {errors.postHeld && <span className="error">{errors.postHeld}</span>}
        <br /><br />

        <label htmlFor="employeeId">Employee Identification Number:</label>
        <input type="number" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleInputChange} required />
        {errors.employeeId && <span className="error">{errors.employeeId}</span>}
        <br /><br />

        <label htmlFor="appointmentDate">Date of Appointment to Present Post:</label>
        <input type="date" id="appointmentDate" name="appointmentDate" value={formData.appointmentDate} onChange={handleInputChange} required />
        {errors.appointmentDate && <span className="error">{errors.appointmentDate}</span>}
        <br /><br />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required></textarea>
        {errors.address && <span className="error">{errors.address}</span>}
        <br /><br />

        <label htmlFor="contact">Contact Details:</label>
        <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} required />
        {errors.contact && <span className="error">{errors.contact}</span>}
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
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="periodOfStudy"
                    value={row.periodOfStudy}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="university"
                    value={row.university}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="marksCGPA"
                    value={row.marksCGPA}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="classObtained"
                    value={row.classObtained}
                    onChange={(e) => handleEducationInputChange(index, e)}
                    required
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
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="institution"
                    value={row.institution}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="from"
                    value={row.from}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="to"
                    value={row.to}
                    onChange={(e) => handleExperienceInputChange(index, e)}
                    required
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
          <button type="button" onClick={saveFormData} style={{ backgroundColor: isFormValid ? '#2896a7' : 'red' }}>Save</button>
          <span style={{ margin: '0 10px' }}></span> {/* Gap */}
          <button type="button" onClick={() => openTab('PartB')}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default PartA;
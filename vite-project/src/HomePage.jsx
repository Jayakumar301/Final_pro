import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();
  const [academicYear, setAcademicYear] = useState('');
  const [category, setCategory] = useState('');
  const [department, setDepartment] = useState('');

  const handleGenerate = () => {
    if (academicYear && category && department) {
      navigate('/parts', { state: { category, department } });
    } else {
      alert('Please select the academic year, category, and department.');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="background-container"></div>
      <div className="content-container">
        <h1 className="text-primary my-4 text-center">Performance based Appraisal System for Faculty Members (PBAS)</h1>
        <h2 className="text-secondary mb-4 text-center">PBAS Home</h2>
        <form className="w-100" style={{ maxWidth: '500px' }}>
          <div className="form-group">
            <label htmlFor="academicYear">Academic Year:</label>
            <select id="academicYear" name="academicYear" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} className="form-control">
              <option value="">Select an option</option>
              <option value="2021-22">2021-22</option>
              <option value="2022-23">2022-23</option>
              <option value="2023-24">2023-24</option>
              <option value="2024-25">2024-25</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control">
              <option value="">Select an option</option>
              <option value="Professor">Professor</option>
              <option value="Associative Professor">Associative Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="form-control">
              <option value="">Select an option</option>
              <option value="CSE">CSE</option>
              <option value="MECH">MECH</option>
              <option value="CIVIL">CIVIL</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
            </select>
          </div>
          <button type="button" onClick={handleGenerate} className="btn btn-primary btn-block">Generate</button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
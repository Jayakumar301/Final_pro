import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();
  const [academicYear, setAcademicYear] = useState('');
  const [category, setCategory] = useState('');

  const handleGenerate = () => {
    if (academicYear && category) {
      navigate('/parts', { state: { category } });
    } else {
      alert('Please select both the academic year and category.');
    }
  };

  return (
    <div className="HomePage">
        <h1>Performance based Appraisal System for Faculty Members(PBAS)</h1>
      <h2>PBAS Home</h2>
      <img src="/Bec_Logo.jpg" alt="Bapatla Engineering College" className="large-image" />
      <form>
        <label htmlFor="academicYear">Academic Year:</label>
        <select id="academicYear" name="academicYear" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
          <option value="">Select an option</option>
          <option value="2021-22">2021-22</option>
          <option value="2022-23">2022-23</option>
          <option value="2023-24">2023-24</option>
          <option value="2024-25">2024-25</option>
        </select>
        <br /><br />
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select an option</option>
          <option value="Professor">Professor</option>
          <option value="Associative Professor">Associative Professor</option>
          <option value="Assistant Professor">Assistant Professor</option>
        </select>
        <br /><br />
        <button type="button" onClick={handleGenerate}>Generate</button>
      </form>
    </div>
  );
}

export default HomePage;
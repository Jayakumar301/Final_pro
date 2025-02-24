import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const PartA = () => {
  const navigate = useNavigate()
  const location = useLocation()
  document.title = "PartA"
  const pathnames = location.pathname.split('/').filter((x) => x)

  const [educationRows, setEducationRows] = useState([{ programme: '', periodofStudy: '', university: '', cgpa: '', classObtained: '' }])
  const [experienceRows, setExperienceRows] = useState([{ serialNo: '', designation: '', institution: '', from: '', to: '' }])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    department: '',
    postheld: [],
    employeeid: '',
    appointmentdate: '',
    dob: '',
    address: '',
    contact: '',
  })

  const handleSave = () => {
    console.log('Form Data:', formData)
    console.log('Education Details:', educationRows)
    console.log('Experience Details:', experienceRows)
    setFormSubmitted(true)
  }

  const handleNext = () => {
    navigate('/partB')
  }

  const handleAddEducationRow = () => {
    setEducationRows([...educationRows, { programme: '', periodofStudy: '', university: '', cgpa: '', classObtained: '' }])
  }

  const handleAddExperienceRow = () => {
    setExperienceRows([...experienceRows, { serialNo: '', designation: '', institution: '', from: '', to: '' }])
  }

  const handleEducationInputChange = (index, event) => {
    const values = [...educationRows]
    values[index][event.target.name] = event.target.value
    setEducationRows(values)
  }

  const handleExperienceInputChange = (index, event) => {
    const values = [...experienceRows]
    values[index][event.target.name] = event.target.value
    setExperienceRows(values)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target
    let updatedPostHeld = [...formData.postheld]
    if (checked) {
      updatedPostHeld = [...updatedPostHeld, value]
    } else {
      updatedPostHeld = updatedPostHeld.filter((item) => item !== value)
    }
    setFormData({ ...formData, [name]: updatedPostHeld })
  }

  return (
    <div className="no-nav-container">
      <div className="breadcrumb">
        <a href="/">Home</a>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          return (
            <span key={to}>
              {' / '}
              <a href={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</a>
            </span>
          )
        })}
      </div>
      <div className="content">
        <h1>PartA Content</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <select id="designation" name="designation" value={formData.designation} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="manager">Manager</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="department">Name of Department:</label>
            <select id="department" name="department" value={formData.department} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="hr">HR</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className="form-group">
            <label>Post Held:</label>
            <div>
              <label>
                <input type="checkbox" name="postheld" value="teamlead" checked={formData.postheld.includes('teamlead')} onChange={handleCheckboxChange} />
                Team Lead
              </label>
              <label>
                <input type="checkbox" name="postheld" value="senior" checked={formData.postheld.includes('senior')} onChange={handleCheckboxChange} />
                Senior
              </label>
              <label>
                <input type="checkbox" name="postheld" value="junior" checked={formData.postheld.includes('junior')} onChange={handleCheckboxChange} />
                Junior
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="employeeid">Employee Identification:</label>
            <input type="number" id="employeeid" name="employeeid" value={formData.employeeid} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentdate">Date of Appointment:</label>
            <input type="date" id="appointmentdate" name="appointmentdate" value={formData.appointmentdate} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleInputChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Education:</label>
            <table>
              <thead>
                <tr>
                  <th>Programme</th>
                  <th>Period of Study</th>
                  <th>University</th>
                  <th>CGPA</th>
                  <th>Class Obtained</th>
                </tr>
              </thead>
              <tbody>
                {educationRows.map((row, index) => (
                  <tr key={index}>
                    <td><input type="text" name="programme" value={row.programme} onChange={event => handleEducationInputChange(index, event)} /></td>
                    <td><input type="text" name="periodofStudy" value={row.periodofStudy} onChange={event => handleEducationInputChange(index, event)} /></td>
                    <td><input type="text" name="university" value={row.university} onChange={event => handleEducationInputChange(index, event)} /></td>
                    <td><input type="text" name="cgpa" value={row.cgpa} onChange={event => handleEducationInputChange(index, event)} /></td>
                    <td><input type="text" name="classObtained" value={row.classObtained} onChange={event => handleEducationInputChange(index, event)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={handleAddEducationRow}>Create Row</button>
          </div>
          <div className="form-group">
            <label>Experience:</label>
            <table>
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Designation</th>
                  <th>Institution</th>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>
              <tbody>
                {experienceRows.map((row, index) => (
                  <tr key={index}>
                    <td><input type="text" name="serialNo" value={row.serialNo} onChange={event => handleExperienceInputChange(index, event)} /></td>
                    <td><input type="text" name="designation" value={row.designation} onChange={event => handleExperienceInputChange(index, event)} /></td>
                    <td><input type="text" name="institution" value={row.institution} onChange={event => handleExperienceInputChange(index, event)} /></td>
                    <td><input type="date" name="from" value={row.from} onChange={event => handleExperienceInputChange(index, event)} /></td>
                    <td><input type="date" name="to" value={row.to} onChange={event => handleExperienceInputChange(index, event)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={handleAddExperienceRow}>Create Row</button>
          </div>
        </form>
        <button className="button" onClick={handleSave}>Save</button>
        <button className="button" onClick={handleNext}>Next</button>
        {formSubmitted && <p>Form submitted successfully!</p>}
      </div>
    </div>
  )
}

export default PartA
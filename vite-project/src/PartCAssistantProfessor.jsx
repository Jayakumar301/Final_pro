import React, { useState } from 'react';
import axios from 'axios'; 

function PartCAssistantProfessor({ openTab }) {
  const [dataAvailable6, setDataAvailable6] = useState(false);
  const [dataAvailable7, setDataAvailable7] = useState(false);
  const [rows6, setRows6] = useState([{ sNo: 1, event: '', certificateUrl: '', score: 0, dfac: '' }]);
  const [rows7, setRows7] = useState([{ sNo: 1, participation: '', details: '', score: 0, dfac: '' }]);
  const [dataAvailable8, setDataAvailable8] = useState(false);
  const [rows8, setRows8] = useState([{ sNo: 1, consultancy: '', details: '', score: 0, dfac: '' }]);
  const [dataAvailable9, setDataAvailable9] = useState(false);
  const [rows9, setRows9] = useState([{ sNo: 1, internship: '', details: '', score: 0, dfac: '' }]);
  const [dataAvailable10, setDataAvailable10] = useState(false);
  const [rows10, setRows10] = useState([{ sNo: 1, courseDuration: '', feedback: '', score: 0, dfac: '' }]);


  const handleDataAvailableChange6 = (event) => {
    setDataAvailable6(event.target.value === 'Yes');
  };

  const handleDataAvailableChange7 = (event) => {
    setDataAvailable7(event.target.value === 'Yes');
  };

  const handleDataAvailableChange8 = (event) => {
    setDataAvailable8(event.target.value === 'Yes');
  };

  const handleDataAvailableChange9 = (event) => {
    setDataAvailable9(event.target.value === 'Yes');
  };

  const handleDataAvailableChange10 = (event) => {
    setDataAvailable10(event.target.value === 'Yes');
  };
  
  
  

  const handleAddRow6 = () => {
    setRows6([...rows6, { sNo: rows6.length + 1, event: '', certificateUrl: '', score: 0, dfac: '' }]);
  };

  const handleAddRow7 = () => {
    setRows7([...rows7, { sNo: rows7.length + 1, participation: '', details: '', score: 0, dfac: '' }]);
  };

  const handleDeleteRow6 = (index) => {
    const newRow = rows6.filter((row, i) => i !== index);
    setRows6(newRow);
  };

  const handleDeleteRow7 = (index) => {
    const newRow = rows7.filter((row, i) => i !== index);
    setRows7(newRow);
  };

  const handleAddRow8 = () => {
    setRows8([...rows8, { sNo: rows8.length + 1, consultancy: '', details: '', score: 0, dfac: '' }]);
  };
  
  const handleDeleteRow8 = (index) => {
    const newRow = rows8.filter((row, i) => i !== index);
    setRows8(newRow);
  };

  const handleAddRow9 = () => {
    setRows9([...rows9, { sNo: rows9.length + 1, internship: '', details: '', score: 0, dfac: '' }]);
  };
  
  const handleDeleteRow9 = (index) => {
    const newRow = rows9.filter((row, i) => i !== index);
    setRows9(newRow);
  };

  const handleAddRow10 = () => {
    setRows10([...rows10, { sNo: rows10.length + 1, courseDuration: '', feedback: '', score: 0, dfac: '' }]);
  };
  
  const handleDeleteRow10 = (index) => {
    const newRow = rows10.filter((row, i) => i !== index);
    setRows10(newRow);
  };



  

  const handleEventChange = (index, event) => {
    const newRow = [...rows6];
    newRow[index].event = event.target.value;
    newRow[index].score = calculateScore6(event.target.value);
    setRows6(newRow);
  };

  const handleParticipationChange = (index, event) => {
    const newRow = [...rows7];
    newRow[index].participation = event.target.value;
    newRow[index].score = calculateScore7(event.target.value);
    setRows7(newRow);
  };

  const handleDfacChange6 = (index, event) => {
    const newRow = [...rows6];
    newRow[index].dfac = event.target.value;
    setRows6(newRow);
  };

  const handleDfacChange7 = (index, event) => {
    const newRow = [...rows7];
    newRow[index].dfac = event.target.value;
    setRows7(newRow);
  };

  const handleConsultancyChange = (index, event) => {
    const newRow = [...rows8];
    newRow[index].consultancy = event.target.value;
    newRow[index].score = calculateScore8(event.target.value);
    setRows8(newRow);
  };

  const handleFeedbackChange = (index, event) => {
    const newRow = [...rows10];
    newRow[index].feedback = event.target.value;
    newRow[index].score = calculateScore10(newRow[index].courseDuration, event.target.value);
    setRows10(newRow);
  };

  
  const handleDfacChange8 = (index, event) => {
    const newRow = [...rows8];
    newRow[index].dfac = event.target.value;
    setRows8(newRow);
  };

  const handleInternshipChange = (index, event) => {
    const newRow = [...rows9];
    newRow[index].internship = event.target.value;
    newRow[index].score = calculateScore9(event.target.value);
    setRows9(newRow);
  };
  
  
  const handleDfacChange9 = (index, event) => {
    const newRow = [...rows9];
    newRow[index].dfac = event.target.value;
    setRows9(newRow);
  };

  const handleCourseDurationChange = (index, event) => {
    const newRow = [...rows10];
    newRow[index].courseDuration = event.target.value;
    newRow[index].score = calculateScore10(event.target.value, newRow[index].feedback);
    setRows10(newRow);
  };
  
  
  const handleDfacChange10 = (index, event) => {
    const newRow = [...rows10];
    newRow[index].dfac = event.target.value;
    setRows10(newRow);
  };
  

  const calculateScore6 = (event) => {
    switch (event) {
      case 'Event Participation':
        return 20;
      case 'Department Coordinators':
        return 20;
      case 'Event Coordinators':
        return 10;
      case 'Other Contributions':
        return 5;
      default:
        return 0;
    }
  };

  const calculateScore7 = (participation) => {
    switch (participation) {
      case 'Participation in state/national events with models':
        return 10;
      case 'First 3 Prizes winning':
        return 20;
      case 'Other Prizes':
        return 15;
      case 'Motivating Students':
        return 10;
      case 'Organize Student innovation sessions':
        return 3;
      case 'Brain teasing / Brain storming Sessions':
        return 3;
      default:
        return 0;
    }
  };

  const calculateScore8 = (consultancy) => {
    if (consultancy < 25000) return 5;
    if (consultancy >= 25000 && consultancy <= 50000) return 10;
    if (consultancy > 50000 && consultancy <= 100000) return 30;
    if (consultancy > 100000) return 40;
    return 0;
  };

  const calculateScore9 = (internship) => {
    switch (internship) {
      case 'At Industry/ R & D Organisations per each student':
        return 5;
      case 'Identification of New Industry / Company / R&D Lab':
        return 10;
      default:
        return 0;
    }
  };


  
  const calculateScore10 = (courseDuration, feedback) => {
    let baseScore = 0;
  
    switch (courseDuration) {
      case '1-3 Days':
        baseScore = 7.5;
        break;
      case '4-6 Days':
        baseScore = 15;
        break;
      case '7-10 Days':
        baseScore = 20;
        break;
      case '>10 Days':
        baseScore = 30;
        break;
      default:
        baseScore = 0;
    }
  
    let feedbackMultiplier = 0;
  
    if (feedback >= 4.5) {
      feedbackMultiplier = 1;
    } else if (feedback >= 4.0) {
      feedbackMultiplier = 0.9;
    } else if (feedback >= 3.6) {
      feedbackMultiplier = 0.7;
    } else if (feedback >= 3.0) {
      feedbackMultiplier = 0.5;
    } else {
      feedbackMultiplier = 0;
    }
  
    return baseScore + feedbackMultiplier;
  };

  const handleCertificateChange6 = (index, event) => {
    const file = event.target.files[0];
    if (file && file.size <= 100000) {
      const newRow = [...rows6];
      newRow[index].certificate = file;
      setRows6(newRow);
    } else {
      alert("File size should be less than 100kB");
    }
  };

  const handleCertificateChange7 = (index, event) => {
    const file = event.target.files[0];
    if (file && file.size <= 100000) {
      const newRow = [...rows7];
      newRow[index].certificate = file;
      setRows7(newRow);
    } else {
      alert("File size should be less than 100kB");
    }
  };

  const handleCertificateChange8 = (index, event) => {
    const file = event.target.files[0];
    if (file && file.size <= 100000) {
      const newRow = [...rows8];
      newRow[index].certificate = file;
      setRows8(newRow);
    } else {
      alert("File size should be less than 100kB");
    }
  };

  const handleCertificateChange9 = (index, event) => {
    const file = event.target.files[0];
    if (file && file.size <= 100000) {
      const newRow = [...rows9];
      newRow[index].certificate = file;
      setRows9(newRow);
    } else {
      alert("File size should be less than 100kB");
    }
  };

  const handleCertificateChange10 = (index, event) => {
    const file = event.target.files[0];
    if (file && file.size <= 100000) {
      const newRow = [...rows10];
      newRow[index].certificate = file;
      setRows10(newRow);
    } else {
      alert("File size should be less than 100kB");
    }
  };
  
  

  const totalScore6 = rows6.reduce((acc, row) => acc + (parseInt(row.score, 10) || 0), 0);
  const totalScore7 = rows7.reduce((acc, row) => acc + (parseInt(row.score, 10) || 0), 0);
  const totalScore8 = rows8.reduce((acc, row) => acc + (parseInt(row.score, 10) || 0), 0);
  const totalScore9 = rows9.reduce((acc, row) => acc + (parseInt(row.score, 10) || 0), 0);
  const totalScore10 = rows10.reduce((acc, row) => acc + (parseInt(row.score, 10) || 0), 0);




  const handleSave = async () => {
    const partCData = {
      rows6,
      rows7,
      rows8,
      rows9,
      rows10
    };
    try {
      const response = await axios.post('http://localhost:5000/save-partc-data', partCData);
      alert(response.data.message);
    } catch (error) {
      alert('Error saving data');
      console.log(error + "Check once..!");
    }
  };

  



  return (
    <div >
      <h5>Co-Curricular Teaching& Learning Process of Assistant Professor</h5>
      <p>This is Part C content for Assistant Professor.</p>

      {/*table 6 */}
      <fieldset className="fieldset-table">
        <legend><h5>6. Student Techno fest (AFOSEC)/Engineers day or other major events</h5></legend>
        <h6>
          mention number of events here like 1,2,3…. Over previous two semesters max (20), Department coordinators(20), others (5), Event coordinators(10). Enclose details clearly certified and[...]
          Max Score 20
          *As defined by Chairman, CAS committee and approved by the Principal
          Self Score
        </h6>
        <label>Is data available?</label>
        <select onChange={handleDataAvailableChange6}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {dataAvailable6 && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Events</th>
                  <th>Upload File (less than 100kB)</th>
                  <th>Score</th>
                  <th>DFAC</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows6.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sNo}</td>
                    <td>
                      <select value={row.event} onChange={(event) => handleEventChange(index, event)}>
                        <option value="">Select Event</option>
                        <option value="Event Participation">Event Participation</option>
                        <option value="Department Coordinators">Department Coordinators</option>
                        <option value="Event Coordinators">Event Coordinators</option>
                        <option value="Other Contributions">Other Contributions</option>
                      </select>
                    </td>
                    <td>
                      <input
                        className='file-upload-container'
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(event) => handleCertificateChange6(index, event)}
                      />
                    </td>
                    <td>{row.score}</td>
                    <td>
                      <input
                        type="text"
                        value={row.dfac}
                        onChange={(event) => handleDfacChange6(index, event)}
                      />
                    </td>
                    <td>
                      <button type="button" onClick={() => handleDeleteRow6(index)}>Delete Row</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={handleAddRow6} style={{ width: '100%', marginTop: '10px' }}>Add Row</button>
            <h5>Total Score: {totalScore6}</h5>
          </div>
        )}
      </fieldset>


      {/*table 7 */}
      <fieldset className="fieldset-table">
        <legend><h5>7. Student innovations; Guidance</h5></legend>
        <h6>
          Max Score 20
          (a) Participation in state/national events with models (Participation -10 points, First 3 Prizes winning – 20 points; other Prizes – 15 points)
          (b) Motivating Students 10 Points
          (i) Organize Student innovation sessions -3 points each session with participation of at least 10 students with record signed by students and authenticated by HOD leading to application of at least 2 Minor/Major projects or one Patent application within the Academic year.
          OR
          (ii) Brain teasing / Brain storming Sessions - 3 points each session with participation of at least 10 students with the participation of HoD and with record authenticated by HOD leading to application of at least 2 Minor/Major projects or one Patent application within the Academic year.
          Give details with dates below:
        </h6>
        <label>Is data available?</label>
        <select onChange={handleDataAvailableChange7}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {dataAvailable7 && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Participation</th>
                  <th>Details</th>
                  <th>Score</th>
                  <th>DFAC</th>
                  <th>Action</th>
                </tr>
              </thead>
              <thead>
              <tr>
                <th>S.No.</th>
                <th>Participation</th>
                <th>Upload File (less than 100kB)</th>
                <th>Score</th>
                <th>DFAC</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows7.map((row, index) => (
                <tr key={index}>
                  <td>{row.sNo}</td>
                  <td>
                    <select value={row.participation} onChange={(event) => handleParticipationChange(index, event)}>
                      <option value="">Select Participation</option>
                      <option value="Participation in state/national events with models">Participation in state/national events with models</option>
                      <option value="First 3 Prizes winning">First 3 Prizes winning</option>
                      <option value="Other Prizes">Other Prizes</option>
                      <option value="Motivating Students">Motivating Students</option>
                      <option value="Organize Student innovation sessions">Organize Student innovation sessions</option>
                      <option value="Brain teasing / Brain storming Sessions">Brain teasing / Brain storming Sessions</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className='file-upload-container'
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(event) => handleCertificateChange7(index, event)}
                    />
                  </td>
                  <td>{row.score}</td>
                  <td>
                    <input
                      type="text"
                      value={row.dfac}
                      onChange={(event) => handleDfacChange7(index, event)}
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow7(index)}>Delete Row</button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
            <button type="button" onClick={handleAddRow7} style={{ width: '100%', marginTop: '10px' }}>Add Row</button>
            <h5>Total Score: {totalScore7}</h5>
          </div>
        )}
      </fieldset>

        {/*table 8 */}
      <fieldset className="fieldset-table">
      <legend><h5>8. Consultancy</h5></legend>
      <h6>
        (participation) Give details with dates below authenticated by HOD: Include this in Co-Curricular File.
        Less than Rs. 25000/- 05 points ; 25000 to 50000 – 10 points ; 50000 to 100000 – 30 points ; greater than 100000 – 40 points
        Max Score 40
      </h6>
      <label>Is data available?</label>
      <select onChange={handleDataAvailableChange8}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
      {dataAvailable8 && (
        <div className="table-container">
          <table >
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Consultancy</th>
              <th>Upload File (less than 100kB)</th>
              <th>Score</th>
              <th>DFAC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows8.map((row, index) => (
              <tr key={index}>
                <td>{row.sNo}</td>
                <td>
                  <input
                    type="number"
                    value={row.consultancy}
                    onChange={(event) => handleConsultancyChange(index, event)}
                  />
                </td>
                <td>
                  <input
                    className='file-upload-container'
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(event) => handleCertificateChange8(index, event)}
                  />
                </td>
                <td>{row.score}</td>
                <td>
                  <input
                    type="text"
                    value={row.dfac}
                    onChange={(event) => handleDfacChange8(index, event)}
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleDeleteRow8(index)}>Delete Row</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
          <button type="button" onClick={handleAddRow8} style={{ width: '100%', marginTop: '10px' }}>Add Row</button>
          <h5>Total Score: {totalScore8}</h5>
        </div>
      )}
    </fieldset>


      {/*table 9 */}
      <fieldset className="fieldset-table">
        <legend><h5>9. Arranging Internships for students with proof</h5></legend>
        <h6>
          At Industry/ R & D Organisations per each student = 5 points
          Identification of New Industry / Company / R&D Lab =10 points per industry
          Max Score 30
        </h6>
        <label>Is data available?</label>
        <select onChange={handleDataAvailableChange9}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {dataAvailable9 && (
          <div className="table-container">
            <table >
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Internship</th>
                <th>Upload File (less than 100kB)</th>
                <th>Score</th>
                <th>DFAC</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows9.map((row, index) => (
                <tr key={index}>
                  <td>{row.sNo}</td>
                  <td>
                    <select value={row.internship} onChange={(event) => handleInternshipChange(index, event)}>
                      <option value="">Select Internship</option>
                      <option value="At Industry/ R & D Organisations per each student">At Industry/ R & D Organisations per each student</option>
                      <option value="Identification of New Industry / Company / R&D Lab">Identification of New Industry / Company / R&D Lab</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className='file-upload-container'
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(event) => handleCertificateChange9(index, event)}
                    />
                  </td>
                  <td>{row.score}</td>
                  <td>
                    <input
                      type="text"
                      value={row.dfac}
                      onChange={(event) => handleDfacChange9(index, event)}
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow9(index)}>Delete Row</button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
            <button type="button" onClick={handleAddRow9} style={{ width: '100%', marginTop: '10px' }}>Add Row</button>
            <h5>Total Score: {totalScore9}</h5>
          </div>
        )}
      </fieldset>

       {/*table 10 */}
       <fieldset className="fieldset-table">
        <legend><h5>10. Knowledge sharing with other departments</h5></legend>
        <h6>
          Short term training courses both theoretical and experimental for faculty and students of other departments in our college:
          1-3 Days – 7.5 points; 4-6 days – 15 points; 7-10 days – 20 points; gretaer than 10 days – 30 points.
          Student/faculty feedback to be taken:
          (&lt;3.0=0, 3.0-3.5=50%, 3.6-4.0=70%, 4.0-4.5=90%, 4.5-5.0=100% of the above points points)
          HOD to certify
          Max=30 points
        </h6>
        <label>Is data available?</label>
        <select onChange={handleDataAvailableChange10}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {dataAvailable10 && (
          <div className="table-container">
            <table>
            <thead>
            <tr>
              <th>S.No.</th>
              <th>Course Duration</th>
              <th>Feedback</th>
              <th>Upload File (less than 100kB)</th>
              <th>Score</th>
              <th>DFAC</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {rows10.map((row, index) => (
                <tr key={index}>
                  <td>{row.sNo}</td>
                  <td>
                    <select value={row.courseDuration} onChange={(event) => handleCourseDurationChange(index, event)}>
                      <option value="">Select Duration</option>
                      <option value="1-3 Days">1-3 Days</option>
                      <option value="4-6 Days">4-6 Days</option>
                      <option value="7-10 Days">7-10 Days</option>
                      <option value=">10 Days">greater than 10 Days</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      step="0.1"
                      value={row.feedback}
                      onChange={(event) => handleFeedbackChange(index, event)}
                    />
                  </td>
                  <td>
                    <input
                      className='file-upload-container'
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(event) => handleCertificateChange10(index, event)}
                    />
                  </td>
                  <td>{row.score}</td>
                  <td>
                    <input
                      type="text"
                      value={row.dfac}
                      onChange={(event) => handleDfacChange10(index, event)}
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow10(index)}>Delete Row</button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
            <button type="button" onClick={handleAddRow10} style={{ width: '100%', marginTop: '10px' }}>Add Row</button>
            <h5>Total Score: {totalScore10}</h5>
          </div>
        )}
      </fieldset>

      <button type="button" onClick={() => openTab('Part-B')} className="btn btn-secondary">Previous</button>
      <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={handleSave} style={{ backgroundColor: '#2896a7' }}>Save</button>
      <span style={{ margin: '0 10px' }}></span> {/* Gap */}
      <button type="button" onClick={() => openTab('Part-D')}>Next</button>
    </div>
  );
}

export default PartCAssistantProfessor;
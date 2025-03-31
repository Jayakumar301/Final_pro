import React, { useState, useEffect } from 'react';

function PartBAssistantProfessor({ openTab }) {
  const initialRows1 = [{ subjectType: '', subjectCode: '', weeklyLoad: '', sem: '', subjectTitle: '', lectures: '' }];
  const initialRows2 = [
    { courseFilePoints: 'SyllabusPage', weightage: '1pointperCourse', checklist: {} },
    { courseFilePoints: 'LessonPlan', weightage: '1PointPerCourse', checklist: {} },
    { courseFilePoints: 'LectureNotes', weightage: '3.5PointsPerCourse', checklist: {} },
    { courseFilePoints: 'QuestionBank', weightage: '2Points', checklist: {} },
    { courseFilePoints: 'InternalAssessmentQuestionPapers', weightage: '1PointPerCourse', checklist: {} },
    { courseFilePoints: 'CourseAssessment', weightage: '4PointsPerCourse', checklist: {} },
    { courseFilePoints: 'HomeAssessment', weightage: '1PointPerCourse', checklist: {} },
    { courseFilePoints: 'MarksSheetCopy', weightage: '0.5PointPerCourse', checklist: {} },
    { courseFilePoints: 'CourseEndSurvey', weightage: '1PointPerCourse', checklist: {} },
    { courseFilePoints: 'EndSemesterCOAssessmentResults', weightage: '2PointsPerCourse', checklist: {} },
    { courseFilePoints: 'SchemeOfEvaluation(SemExam)', weightage: '3PointsPerCourse', checklist: {} },
    { courseFilePoints: 'AnyOther', weightage: '1PointPerCourse', checklist: {} }
  ];
  const initialRows3 = [{ natureOfDuty: '', sem1: '', sem2: '', totalDuties: '' }];
  const initialRows4 = [{ sNo: '', dutiesSem1Sem2: '', evaluationSchedule: '', remarksDFAC: '' }];
  const initialRows5 = [{ useOfInnovatingTeachingMethodology: '', sem1Score: '', sem2Score: '' }];
  const initialRows6 = [{ item: '', semester1: '', score1: '', semester2: '', score2: '' }];
  const initialRows7 = [{ item: 'How many counselling sessions done? for each 5 points', sem1: '', sem2: '', totalSessions: '', score: '' }];
  const initialRows8 = [];
  const initialRows9 = [{ subjectsSem1: '', feedbackSem1: '', subjectsSem2: '', feedbackSem2: '' }];
  const initialRows10 = [{ projectBatchNo: '', sem: '', averageScore: '' }];
  const [rows10, setRows10] = useState(initialRows10);
  const initialRows11 = rows10.map(row => ({
    batchNo: row.projectBatchNo,
    sem: row.sem,
    averageScore: ''
  }));
  const initialRows12 = [{ courseType: '', attendance: '', endCourseExamMarks: '', score: '' }];
  const initialRows13 = [{ involvement: 'Involvement of Faculty in Syllabus Framing (30)', selfScore: '', dfac: '' }];

  const [rows1, setRows1] = useState(initialRows1);
  const [rows2, setRows2] = useState(initialRows2);
  const [rows3, setRows3] = useState(initialRows3);
  const [rows4, setRows4] = useState(initialRows4);
  const [rows5, setRows5] = useState(initialRows5);
  const [rows6, setRows6] = useState(initialRows6);
  const [rows7, setRows7] = useState(initialRows7);
  const [rows8, setRows8] = useState(initialRows8);
  const [rows9, setRows9] = useState(initialRows9);


  const [rows11, setRows11] = useState(initialRows11);

  const [rows12, setRows12] = useState(initialRows12);
  const [rows13, setRows13] = useState(initialRows13);

  const [subjectCodes, setSubjectCodes] = useState([]);

  useEffect(() => {
    const codes = rows1.map(row => row.subjectCode).filter(code => code);
    setSubjectCodes(codes);
  }, [rows1]);

  useEffect(() => {
    const sem1Subjects = rows1.filter(row => row.sem === 'sem1').map(row => ({ subjectsSem1: row.subjectCode, passSem1: '' }));
    const sem2Subjects = rows1.filter(row => row.sem === 'sem2').map(row => ({ subjectsSem2: row.subjectCode, passSem2: '' }));
  
    const maxRows = Math.max(sem1Subjects.length, sem2Subjects.length);
    const newRows8 = Array.from({ length: maxRows }, (_, index) => ({
      subjectsSem1: sem1Subjects[index]?.subjectsSem1 || '',
      passSem1: sem1Subjects[index]?.passSem1 || '',
      subjectsSem2: sem2Subjects[index]?.subjectsSem2 || '',
      passSem2: sem2Subjects[index]?.passSem2 || '',
      avg: ''
    }));
  
    setRows8(newRows8);
  }, [rows1]);

  useEffect(() => {
    const sem1Subjects = rows1.filter(row => row.sem === 'sem1').map(row => ({ subjectsSem1: row.subjectCode, feedbackSem1: '' }));
    const sem2Subjects = rows1.filter(row => row.sem === 'sem2').map(row => ({ subjectsSem2: row.subjectCode, feedbackSem2: '' }));
  
    const maxRows = Math.max(sem1Subjects.length, sem2Subjects.length);
    const newRows9 = Array.from({ length: maxRows }, (_, index) => ({
      subjectsSem1: sem1Subjects[index]?.subjectsSem1 || '',
      feedbackSem1: sem1Subjects[index]?.feedbackSem1 || '',
      subjectsSem2: sem2Subjects[index]?.subjectsSem2 || '',
      feedbackSem2: sem2Subjects[index]?.feedbackSem2 || ''
    }));
  
    setRows9(newRows9);
  }, [rows1]);

  useEffect(() => {
    const newRows11 = rows10.map(row => ({
      batchNo: row.projectBatchNo,
      sem: row.sem,
      averageScore: ''
    }));
    setRows11(newRows11);
  }, [rows10]);

  const handleAddRow1 = () => {
    setRows1([...rows1, { subjectType: '', subjectCode: '', weeklyLoad: '', sem: '', subjectTitle: '', lectures: '' }]);
  };

  const handleDeleteRow1 = (index) => {
    const newRows1 = rows1.filter((row, i) => i !== index);
    setRows1(newRows1);
  };

  const handleChange1 = (index, event) => {
    const { name, value } = event.target;
    const newRows1 = [...rows1];
    newRows1[index][name] = value;
    setRows1(newRows1);
  };

  const handleChange2 = (index, event, subjectCode, field) => {
    const { checked } = event.target;
    const newRows2 = [...rows2];
    if (!newRows2[index][field]) {
      newRows2[index][field] = {};
    }
    newRows2[index][field][subjectCode] = checked;
    setRows2(newRows2);
  };

  const handleAddRow3 = () => {
    setRows3([...rows3, { natureOfDuty: '', sem1: '', sem2: '', totalDuties: '' }]);
  };

  const handleDeleteRow3 = (index) => {
    const newRows3 = rows3.filter((row, i) => i !== index);
    setRows3(newRows3);
  };

  const handleChange3 = (index, event) => {
    const { name, value } = event.target;
    const newRows3 = [...rows3];
    newRows3[index][name] = value;
    setRows3(newRows3);
  };

  const handleAddRow4 = () => {
    setRows4([...rows4, { sNo: '', dutiesSem1Sem2: '', evaluationSchedule: '', remarksDFAC: '' }]);
  };

  const handleDeleteRow4 = (index) => {
    const newRows4 = rows4.filter((row, i) => i !== index);
    setRows4(newRows4);
  };

  const handleChange4 = (index, event) => {
    const { name, value } = event.target;
    const newRows4 = [...rows4];
    newRows4[index][name] = value;
    setRows4(newRows4);
  };

  const handleAddRow5 = () => {
    setRows5([...rows5, { useOfInnovatingTeachingMethodology: '', sem1Score: '', sem2Score: '' }]);
  };

  const handleDeleteRow5 = (index) => {
    const newRows5 = rows5.filter((row, i) => i !== index);
    setRows5(newRows5);
  };

  const handleChange5 = (index, event) => {
    const { name, value } = event.target;
    const newRows5 = [...rows5];
    newRows5[index][name] = value;
    setRows5(newRows5);
  };

  const handleAddRow6 = () => {
    setRows6([...rows6, { item: '', semester1: '', score1: '', semester2: '', score2: '' }]);
  };
  
  const handleDeleteRow6 = (index) => {
    const newRows6 = rows6.filter((row, i) => i !== index);
    setRows6(newRows6);
  };

  const handleChange6 = (index, event) => {
    const { name, value } = event.target;
    const newRows6 = [...rows6];
    newRows6[index][name] = value;
    setRows6(newRows6);
  };

  const handleChange7 = (index, event) => {
    const { name, value } = event.target;
    const newRows7 = [...rows7];
    newRows7[index][name] = value;
    setRows7(newRows7);
  };

  const handleChange8 = (index, event) => {
    const { name, value } = event.target;
    const newRows8 = [...rows8];
    newRows8[index][name] = value;
    setRows8(newRows8);
  };

  const handleChange9 = (index, event) => {
    const { name, value } = event.target;
    const newRows9 = [...rows9];
    newRows9[index][name] = value;
    setRows9(newRows9);
  };

  const handleAddRow10 = () => {
  setRows10([...rows10, { projectBatchNo: '', sem: '', averageScore: '' }]);
};

const handleDeleteRow10 = (index) => {
  const newRows10 = rows10.filter((row, i) => i !== index);
  setRows10(newRows10);
};

const handleChange10 = (index, event) => {
  const { name, value } = event.target;
  const newRows10 = [...rows10];
  newRows10[index][name] = value;
  setRows10(newRows10);
};

const handleAddRow11 = () => {
  setRows11([...rows11, { batchNo: '', sem: '', averageScore: '' }]);
};

const handleDeleteRow11 = (index) => {
  const newRows11 = rows11.filter((row, i) => i !== index);
  setRows11(newRows11);
};

const handleChange11 = (index, event) => {
  const { name, value } = event.target;
  const newRows11 = [...rows11];
  newRows11[index][name] = value;
  setRows11(newRows11);
};

  const handleAddRow12 = () => {
    setRows12([...rows12, { courseType: '', attendance: '', endCourseExamMarks: '', score: '' }]);
  };
  
  const handleDeleteRow12 = (index) => {
    const newRows12 = rows12.filter((row, i) => i !== index);
    setRows12(newRows12);
  };
  
  const handleChange12 = (index, event) => {
    const { name, value } = event.target;
    const newRows12 = [...rows12];
    newRows12[index][name] = value;
  
    // Calculate score based on conditions
    if (newRows12[index].courseType === "Full Course with Online Exam" && newRows12[index].attendance >= 75) {
      const score = newRows12[index].endCourseExamMarks >= 75 ? 60 : Math.round((newRows12[index].endCourseExamMarks / 100) * 60);
      newRows12[index].score = score;
    } else if (newRows12[index].courseType === "Teleconference Mode or Course without Exam" && newRows12[index].attendance >= 75) {
      newRows12[index].score = 30;
    } else {
      newRows12[index].score = 0; // Default score if conditions are not met
    }
  
    setRows12(newRows12);
  };

  const handleAddRow13 = () => {
    setRows13([...rows13, { involvement: 'Involvement of Faculty in Syllabus Framing (30)', selfScore: '', dfac: '' }]);
  };
  
  const handleDeleteRow13 = (index) => {
    const newRows13 = rows13.filter((row, i) => i !== index);
    setRows13(newRows13);
  };
  
  const handleChange13 = (index, event) => {
    const { name, value } = event.target;
    const newRows13 = [...rows13];
    newRows13[index][name] = value;
    setRows13(newRows13);
  };
 

  return (
    <div className="container">
      <h2 className="my-4">Part B - Assistant Professor</h2>
      <form>
        {/* Table 1 */}
        <div className="form-group">
          <label>1:</label>
          <table className="table">
            <thead>
              <tr>
                <th>Subject Type</th>
                <th>Subject Code</th>
                <th>Weekly Load</th>
                <th>Sem</th>
                <th>Subject Title</th>
                <th>Lectures Taken/Lectures Proposed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows1.map((row, index) => (
                <tr key={index}>
                  <td>
                    <select
                      name="subjectType"
                      value={row.subjectType}
                      onChange={(e) => handleChange1(index, e)}
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
                      onChange={(e) => handleChange1(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="weeklyLoad"
                      value={row.weeklyLoad}
                      onChange={(e) => handleChange1(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      name="sem"
                      value={row.sem}
                      onChange={(e) => handleChange1(index, e)}
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
                      onChange={(e) => handleChange1(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="lectures"
                      value={row.lectures}
                      onChange={(e) => handleChange1(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow1(index)} className="btn btn-danger">
                      Delete Row
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow1} className="btn btn-success">Add Row</button>
        </div>
        {/* Table 2 */}
        <div className="form-group">
          <label>2:</label>
          <table className="table">
            <thead>
              <tr>
                <th>Course File Points</th>
                {subjectCodes.map(subjectCode => (
                  <th key={subjectCode}>{subjectCode}</th>
                ))}
                <th>Weightage</th>
              </tr>
            </thead>
            <tbody>
              {rows2.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="courseFilePoints"
                      value={row.courseFilePoints}
                      onChange={(e) => handleChange2(index, e, row.courseFilePoints, 'courseFilePoints')}
                      className="form-control"
                      readOnly
                    />
                  </td>
                  {subjectCodes.map(subjectCode => (
                    <td key={subjectCode} className="text-center">
                      <input
                        type="checkbox"
                        name="checklist"
                        checked={row.checklist[subjectCode] || false}
                        onChange={(e) => handleChange2(index, e, subjectCode, 'checklist')}
                        className="form-check-input"
                      />
                    </td>
                  ))}
                  <td>
                    <input
                      type="text"
                      name="weightage"
                      value={row.weightage}
                      onChange={(e) => handleChange2(index, e, 'weightage', 'weightage')}
                      className="form-control"
                      readOnly
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Table 3 */}
        <div className="form-group">
          <label>3:</label>
          <table className="table">
            <thead>
              <tr>
                <th>Nature of Duty</th>
                <th>Sem 1 (Number)</th>
                <th>Sem 2 (Number)</th>
                <th>Total No. of Duties Performed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows3.map((row, index) => (
                <tr key={index}>
                  <td>
                    <select
                      name="natureOfDuty"
                      value={row.natureOfDuty}
                      onChange={(e) => handleChange3(index, e)}
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      <option value="ExternalEvaluation">External Evaluation</option>
                      <option value="ExternalInvigilatiion">External Invigilation</option>
                      <option value="Lab-Internal Member">Lab - Internal Member</option>
                      <option value="Seminar-Internal Member">Seminar - Internal Member</option>
                      <option value="MiniProject-InternalMember">Mini Project - Internal Member</option>
                      <option value="MajorProject-InternalMember">Major Project - Internal Member</option>
                      <option value="TermPaperEval">Term Paper Evaluation</option>
                      <option value="AnyOther">Any Other</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="sem1"
                      value={row.sem1}
                      onChange={(e) => handleChange3(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="sem2"
                      value={row.sem2}
                      onChange={(e) => handleChange3(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="totalDuties"
                      value={row.totalDuties}
                      onChange={(e) => handleChange3(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow3(index)} className="btn btn-danger">
                      Delete Row
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow3} className="btn btn-success">Add Row</button>
        </div>
        {/* Table 4 */}
        <div className="form-group">
          <label>4:</label>
          <table className="table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>No. of Duties in Sem 1 & Sem 2</th>
                <th>Evaluation done as per Schedule or Not</th>
                <th>Any Remarks received from DFAC</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows4.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="sNo"
                      value={row.sNo}
                      onChange={(e) => handleChange4(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="dutiesSem1Sem2"
                      value={row.dutiesSem1Sem2}
                      onChange={(e) => handleChange4(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      name="evaluationSchedule"
                      value={row.evaluationSchedule}
                      onChange={(e) => handleChange4(index, e)}
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="remarksDFAC"
                      value={row.remarksDFAC}
                      onChange={(e) => handleChange4(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow4(index)} className="btn btn-danger">
                      Delete Row
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow4} className="btn btn-success">Add Row</button>
        </div>
        {/* Table 5 */}
        <div className="form-group">
          <label>5:</label>
          <table className="table">
            <thead>
              <tr>
                <th>Use of Innovating Teaching Methodology</th>
                <th>Sem 1 Score</th>
                <th>Sem 2 Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows5.map((row, index) => (
                <tr key={index}>
                  <td>
                    <select
                      name="useOfInnovatingTeachingMethodology"
                      value={row.useOfInnovatingTeachingMethodology}
                      onChange={(e) => handleChange5(index, e)}
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      <option value="ICT based Teaching Methodology over 2 semesters">ICT based Teaching Methodology over 2 semesters</option>
                      <option value="PPT with Annotations and Assesment based on content">PPT with Annotations and Assesment based on content</option>
                      <option value="Visuals">Visuals</option>
                      <option value="MOODLE Usage">MOODLE Usage</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="sem1Score"
                      value={row.sem1Score}
                      onChange={(e) => handleChange5(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="sem2Score"
                      value={row.sem2Score}
                      onChange={(e) => handleChange5(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow5(index)} className="btn btn-danger">
                      Delete Row
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow5} className="btn btn-success">Add Row</button>
        </div>

       {/* Table 6 */}
        <div className="form-group">
          <label>6:</label>
          <table className="table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Semester1</th>
                <th>Score</th>
                <th>Semester2</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows6.map((row, index) => (
                <tr key={index}>
                  <td>
                    <select
                      name="item"
                      value={row.item}
                      onChange={(e) => handleChange6(index, e)}
                      className="form-control"
                    >
                      <option value="">Select an option</option>
                      <option value="Remedial">Remedial</option>
                      <option value="Bridge">Bridge</option>
                      <option value="Career Oriented">Career Oriented</option>
                      <option value="Content Beyond Syllabus">Content Beyond Syllabus</option>
                      <option value="Additional Experiments">Additional Experiments</option>
                      <option value="Job Oriented Certificates">Job Oriented Certificates</option>
                      <option value="AnyOther">Any Other</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="semester1"
                      value={row.semester1}
                      onChange={(e) => handleChange6(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="score1"
                      value={row.score1}
                      onChange={(e) => handleChange6(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="semester2"
                      value={row.semester2}
                      onChange={(e) => handleChange6(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="score2"
                      value={row.score2}
                      onChange={(e) => handleChange6(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => handleDeleteRow6(index)} className="btn btn-danger">
                      Delete Row
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddRow6} className="btn btn-success">Add Row</button>
        </div>

        {/* Table 7 */}
        <div className="form-group">
          <label>7:</label>
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Sem1</th>
                <th>Sem2</th>
                <th>Total no of Sessions taken</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {rows7.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="item"
                      value={"How many counselling sessions done? for each 5 points"}
                      className="form-control"
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="sem1"
                      value={row.sem1}
                      onChange={(e) => handleChange7(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="sem2"
                      value={row.sem2}
                      onChange={(e) => handleChange7(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="totalSessions"
                      value={row.totalSessions}
                      onChange={(e) => handleChange7(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="score"
                      value={row.score}
                      onChange={(e) => handleChange7(index, e)}
                      className="form-control"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 8 */}
      <div className="form-group">
        <label>8:</label>
        <table className="table">
          <thead>
            <tr>
              <th colSpan="2">Sem1</th>
              <th colSpan="2">Sem2</th>
              <th rowSpan="2">Avg%</th>
            </tr>
            <tr>
              <th>Subjects</th>
              <th>% Pass</th>
              <th>Subjects</th>
              <th>% Pass</th>
            </tr>
          </thead>
          <tbody>
            {rows8.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="subjectsSem1"
                    value={row.subjectsSem1}
                    onChange={(e) => handleChange8(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="passSem1"
                    value={row.passSem1}
                    onChange={(e) => handleChange8(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="subjectsSem2"
                    value={row.subjectsSem2}
                    onChange={(e) => handleChange8(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="passSem2"
                    value={row.passSem2}
                    onChange={(e) => handleChange8(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="avg"
                    value={row.avg}
                    onChange={(e) => handleChange8(index, e)}
                    className="form-control"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table 9 */}
        <div className="form-group">
          <label>9:</label>
          <table className="table">
            <thead>
              <tr>
                <th>Subjects</th>
                <th>Feedback in Sem1</th>
                <th>Subjects</th>
                <th>Feedback in Sem2</th>
              </tr>
            </thead>
            <tbody>
              {rows9.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="subjectsSem1"
                      value={row.subjectsSem1}
                      onChange={(e) => handleChange9(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="feedbackSem1"
                      value={row.feedbackSem1}
                      onChange={(e) => handleChange9(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="subjectsSem2"
                      value={row.subjectsSem2}
                      onChange={(e) => handleChange9(index, e)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="feedbackSem2"
                      value={row.feedbackSem2}
                      onChange={(e) => handleChange9(index, e)}
                      className="form-control"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 10 */}
      <div className="form-group">
        <label>10:</label>
        <table className="table">
          <thead>
            <tr>
              <th>Project Batch No</th>
              <th>Sem</th>
              <th>Average Score in a Batch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows10.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="projectBatchNo"
                    value={row.projectBatchNo}
                    onChange={(e) => handleChange10(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <select
                    name="sem"
                    value={row.sem}
                    onChange={(e) => handleChange10(index, e)}
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="sem1">Sem 1</option>
                    <option value="sem2">Sem 2</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    name="averageScore"
                    value={row.averageScore}
                    onChange={(e) => handleChange10(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleDeleteRow10(index)} className="btn btn-danger">
                    Delete Row
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddRow10} className="btn btn-success">Add Row</button>
      </div>

      {/* Table 11 */}
      <div className="form-group">
        <label>11:</label>
        <table className="table">
          <thead>
            <tr>
              <th>Batch No</th>
              <th>Sem</th>
              <th>Average Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows11.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="batchNo"
                    value={row.batchNo}
                    onChange={(e) => handleChange11(index, e)}
                    className="form-control"
                    readOnly
                  />
                </td>
                <td>
                  <select
                    name="sem"
                    value={row.sem}
                    onChange={(e) => handleChange11(index, e)}
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="sem1">Sem 1</option>
                    <option value="sem2">Sem 2</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    name="averageScore"
                    value={row.averageScore}
                    onChange={(e) => handleChange11(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleDeleteRow11(index)} className="btn btn-danger">
                    Delete Row
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddRow11} className="btn btn-success">Add Row</button>
      </div>

      {/* Table 12 */}
      <div className="form-group">
        <label>12:</label>
        <table className="table">
          <thead>
            <tr>
              <th colSpan="5">NPTEL/MIT/COURSERA/edx/UDACITY Lectures (60)</th>
            </tr>
            <tr>
              <th>Course Type</th>
              <th>Attendance</th>
              <th>End Course Exam Marks</th>
              <th>Score</th>
              <th rowspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows12.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    name="courseType"
                    value={row.courseType}
                    onChange={(e) => handleChange12(index, e)}
                    className="form-control"
                  >
                    <option value="">Select an option</option>
                    <option value="Full Course with Online Exam">Full Course with Online Exam</option>
                    <option value="Teleconference Mode or Course without Exam">Teleconference Mode or Course without Exam</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    name="attendance"
                    value={row.attendance}
                    onChange={(e) => handleChange12(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="endCourseExamMarks"
                    value={row.endCourseExamMarks}
                    onChange={(e) => handleChange12(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="score"
                    value={row.score}
                    readOnly
                    className="form-control"
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleDeleteRow12(index)} className="btn btn-danger">
                    Delete Row
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddRow12} className="btn btn-success">Add Row</button>
      </div>
      
      {/* Table 13 */}
      <div className="form-group">
        <label>13:</label>
        <table className="table">
          <thead>
            <tr>
              <th>Involvement of Faculty in Syllabus Framing (30)</th>
              <th>Self Score</th>
              <th>DFAC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows13.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="involvement"
                    value={row.involvement}
                    onChange={(e) => handleChange13(index, e)}
                    className="form-control"
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="selfScore"
                    value={row.selfScore}
                    onChange={(e) => handleChange13(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="dfac"
                    value={row.dfac}
                    onChange={(e) => handleChange13(index, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleDeleteRow13(index)} className="btn btn-danger">
                    Delete Row
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddRow13} className="btn btn-success">Add Row</button>
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
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

  const [rows1, setRows1] = useState(initialRows1);
  const [rows2, setRows2] = useState(initialRows2);
  const [rows3, setRows3] = useState(initialRows3);
  const [subjectCodes, setSubjectCodes] = useState([]);

  useEffect(() => {
    const codes = rows1.map(row => row.subjectCode).filter(code => code);
    setSubjectCodes(codes);
  }, [rows1]);

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

  return (
    <div className="container">
      <h2 className="my-4">Part B - Assistant Professor</h2>
      <form>
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
        <div className="tab-buttons">
          <button type="button" onClick={() => openTab('PartA')} className="btn btn-secondary">Previous</button>
          <button type="button" onClick={() => openTab('PartC')} className="btn btn-primary">Next</button>
        </div>
      </form>
    </div>
  );
}

export default PartBAssistantProfessor;
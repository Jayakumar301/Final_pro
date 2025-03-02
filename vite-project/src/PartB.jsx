import React, { useState } from 'react';
import './App.css';

function PartB({ openTab }) {
  const [averageWeeklyLoad, setAverageWeeklyLoad] = useState(0);
  const [lecturesTaken, setLecturesTaken] = useState(0);

  // Function to calculate average weekly load
  const calculateAverageWeeklyLoad = () => {
    // Logic to calculate average weekly load
    setAverageWeeklyLoad(27.5); // Placeholder value
  };

  // Function to calculate lectures taken
  const calculateLecturesTaken = () => {
    // Logic to calculate lectures taken
    setLecturesTaken(100); // Placeholder value
  };

  return (
    <div className="PartB">
      <h2>PART-B: CURRICULUM- TEACHING & LEARNING PROCESSES</h2>
      <h3>Maximum API Score: 350</h3>
      <h3>Minimum API Score: ----</h3>

      {/* Section 1.1 */}
      <section>
        <h3>1.1 Teaching weekly load allotted by Department as per curricular time table</h3>
        <table>
          <thead>
            <tr>
              <th>Subjects Title</th>
              <th>Weekly Load*</th>
              <th>Subjects Title</th>
              <th>Weekly Load</th>
              <th>Total</th>
              <th>Average of weekly load</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Theory: Artificial Neural Networks and Deep Learning</td>
              <td>4</td>
              <td>Theory: Compiler Design</td>
              <td>4</td>
              <td>8</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Theory: Data Handling and Visualization</td>
              <td>4</td>
              <td>Theory: Machine Learning</td>
              <td>4</td>
              <td>8</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Lab: Data Handling and Visualization</td>
              <td>3</td>
              <td>Lab: Machine Learning Lab</td>
              <td>6</td>
              <td>9</td>
              <td>4.5</td>
            </tr>
            <tr>
              <td>Lab: Linux Essentials</td>
              <td>6</td>
              <td></td>
              <td></td>
              <td>6</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Major project</td>
              <td>24</td>
              <td></td>
              <td></td>
              <td>24</td>
              <td>12</td>
            </tr>
            <tr>
              <td colSpan="6">Grand Average Load: {averageWeeklyLoad}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={calculateAverageWeeklyLoad}>Calculate Average Weekly Load</button>
      </section>

      {/* Section 1.2 */}
      <section>
        <h3>1.2 Lectures actually taken as fraction of lectures allocated</h3>
        <table>
          <thead>
            <tr>
              <th>Subjects</th>
              <th>Lectures taken / Lectures proposed</th>
              <th>Subjects</th>
              <th>Lectures taken / Lectures proposed</th>
              <th>Lectures Taken</th>
              <th>Lectures Proposed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Theory: Artificial Neural Networks and Deep Learning</td>
              <td>56/56</td>
              <td>Theory: Compiler Design</td>
              <td>61/56</td>
              <td>56</td>
              <td>56</td>
            </tr>
            <tr>
              <td>Theory: Data Handling and Visualization</td>
              <td>51/56</td>
              <td>Theory: Machine Learning</td>
              <td>56/56</td>
              <td>51</td>
              <td>56</td>
            </tr>
            <tr>
              <td>Lab: Data Handling and Visualization</td>
              <td>39/39</td>
              <td>Lab: Machine Learning Lab</td>
              <td>57/39</td>
              <td>39</td>
              <td>39</td>
            </tr>
            <tr>
              <td>Lab: Linux Essentials</td>
              <td>59/60</td>
              <td></td>
              <td></td>
              <td>59</td>
              <td>60</td>
            </tr>
            <tr>
              <td colSpan="6">Total Lectures Taken: {lecturesTaken}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={calculateLecturesTaken}>Calculate Lectures Taken</button>
      </section>

      {/* Section 1.3 */}
      <section>
        <h3>1.3 Course files with the following data have been prepared by me</h3>
        <table>
          <thead>
            <tr>
              <th>Course file points</th>
              <th>Weightages/Course/sem</th>
              <th>Sem – I</th>
              <th>Sem – II</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Syllabus page, COs</td>
              <td>1 point per course per sem (Max 4 Points)</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Lesson plan</td>
              <td>1 point per course per sem (Max 4 Points)</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Lecture Notes</td>
              <td>3.5 points per course per sem (Max 14 Points)</td>
              <td>3.5</td>
              <td>3.5</td>
            </tr>
            <tr>
              <td>Question bank</td>
              <td>2 points per course (Max 8 points)</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Internal Assessment Question Papers</td>
              <td>1 point per course (Max 4 points)</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Course Assessment</td>
              <td>4 points per course per sem (max 16)</td>
              <td>4</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Home Assignment Questions</td>
              <td>1 point per course per sem (max 4)</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Points Sheet copy from web(IT)</td>
              <td>0.5 points per course per sem (max 2)</td>
              <td>0.5</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>Course End Survey and Consolidation</td>
              <td>1 point per course per sem (max 4)</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>End Semester CO assessment Results*</td>
              <td>2 points per course per sem (max 8)</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Scheme of evaluation sem end exam</td>
              <td>3 point per course/sem</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Any Other</td>
              <td>1 point/course per sem</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Save and Next Buttons */}
      <div className="tab-buttons">
        <button type="button">Save</button>
        <button type="button" onClick={() => openTab('PartC')}>Next</button>
      </div>
    </div>
  );
}

export default PartB;
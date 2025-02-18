{/*import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
const Professorform = () => {

    const location = useLocation();
    const professor = location.state?.Professor || "No professor selected";

    const [name,setName] = useState("");
    const [selectedAppointedDate, setSelectedAppointedDate] = useState("");
    const [selectedBirthDate, setSelectedBirthDate] = useState("");
    const [address,setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [email,setEmail] = useState("");
    const [table1Rows,setTable1Rows] = useState([]);
    const [table2Rows,setTable2Rows] = useState([]);

    const [selectedOptions, setSelectedOptions] = useState({
        ProjectCoordinator: false,
        DepartmentBOSCoordinator: false,
        CoordinatorforCurricularDesign: false,
      });


    const namehandle =(e) =>
    {
        setName(e.target.value)
    }

    const Postheldhandle = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions((prev) => ({
        ...prev,
        [name]: checked,
    }));
    };

    const appointeddatehandle = (event) => {
        setSelectedAppointedDate(event.target.value);
      };

    const birthdatehandle = (event) => {
        setSelectedBirthDate(event.target.value);
    }; 

    const addresshandle = (event) => {
        setAddress(event.target.value);
    };

    const numberhandle = (event) => {
        setNumber(event.target.value);
      };

    const emailhandle = (event)=>{
        setEmail(event.target.value);
    }

    const addRowtotable1 = () => {
        setTable1Rows([...table1Rows, { id: table1Rows.length + 1, Programme: "", PeriodOfStudy: "", University: "", Marksorcgpa: "" }]);
      };

      const addRowtotable2 = () => {
        setTable2Rows([...table2Rows, { id: table2Rows.length + 1, SNO: "", Designation: "", Institution: "", From: "", To:"" }]);
      };
    
    const deleteTable1Row = (index) => {
        setTable1Rows(rows.filter((_, i) => i !== index));
    };

    const deleteTable2Row = (index) => {
        setTable2Rows(rows.filter((_, i) => i !== index));
    };


  return (
    <div>
      <form>
        <h1>Professor Details</h1>
        <h2>
            Name:<input type='text' name="name" value={name} onChange={namehandle}/><br/>
            Name of the Department:
            <select id="Professor">
                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                <option value="Electrical Communication and Engineering">Electrical Communication and Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electrical Instumental Engineering">Electrical Instumental Engineering</option>
                <option value="Information Technology">Information Technology </option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Data Science and Engineering">Data Science and Engineering</option>
                </select><br/>
            Post held:
                <input type="checkbox" name="Project Coordinator" checked={selectedOptions.ProjectCoordinator} onChange={Postheldhandle} />Project Coordinator                
                <input type="checkbox" name="Department BOS Coordinator" checked={selectedOptions.DepartmentBOSCoordinator} onChange={Postheldhandle} />Department BOS Coordinator               
                <input type="checkbox" name="CoordinatorforCurricularDesign" checked={selectedOptions.CoordinatorforCurricularDesign} onChange={Postheldhandle}/>Coordinator for Curricular Design
                <pre>{JSON.stringify(selectedOptions, null, 2)}</pre><br/>

            Employe Identification Number:<input type="text" name="IdentificationNUmber"/><br/>
            Date of Appointment to the present post:<input type='date' value={selectedAppointedDate} onChange={appointeddatehandle}/><br/>
            Date of birth :<input type='date' value={selectedBirthDate} onchange={birthdatehandle}/><br/>
            Address :<address cols="5" rows="10" value={address} onchange={addresshandle}></address><br/>
            contact :<input type="number" value={number} onchange={numberhandle}/><br/>
            Email   :<input type="email" value={email} onchange={emailhandle}/><br/>
            Education Details:
            <button onClick={addRowtotable1}>Create Row</button>
            <table border="1" style={{ marginTop: "10px", width: "100%" }}>
                <thead>
                <tr>
                    <th>Programme</th>
                    <th>Period of Study</th>
                    <th>University</th>
                    <th>Marks/CGPA</th>
                    <th>Class Obtained</th>
                </tr>
                </thead>
                <tbody>
                {table1Rows.map((row, index) => (
                    <tr key={row.id}>
                    <td><input type="text" placeholder="Enter data" /></td>
                    <td><input type="text" placeholder="Enter data" /></td>
                    <td><input type="text" placeholder="Enter data" /></td>
                    <td><input type="text" placeholder="Enter data" /></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => deleteTable1Row(index)}>Delete</button><br/>
        
            <button onClick={addRowtotable2}>Create Row</button>
            <table border="1" style={{ marginTop: "10px", width: "100%" }}>
                <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Designation</th>
                    <th>Institution</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
                </thead>
                <tbody>
                {table2Rows.map((row, index) => (
                    <tr key={row.id}>
                    <td><input type="text" placeholder="Enter data" /></td>
                    <td><input type="text" placeholder="Enter data" /></td>
                    <td><input type="text" placeholder="Enter data" /></td>
                    <td><input type="text" placeholder="Enter data" /></td>
                    <td><input type="text" placeholder="Enter data" /></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => deleteTable2Row(index)}>Delete</button><br/>

            <button onClick={() => Submit()}>Submit</button>
        </h2>
      </form>
    </div>
  )
}

export default Professorform

*/}

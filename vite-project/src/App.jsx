import React from 'react';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

const App = () => {
  document.title = "HomeTab";


  return (
    <div className="App">
     <NavBar />
      
     
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path='/FirstTab' element={<FirstTab />} />
            <Route path='/SecondTab' element={<SecondTab />} />
            <Route path='/ThirdTab' element={<ThirdTab />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

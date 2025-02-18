import React, { useState } from 'react';
import '../styles/myfile.css'

const FirstTab = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const fdetails = { name, email, phone, password };


  document.title="FirstTab";
  const sbmt = async (e) => {
    e.preventDefault();
    console.log(fdetails);

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fdetails),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Error submitting form: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div align="center">
      <form className="Forms" onSubmit={sbmt}>
        <h2>Performance Based Appraisal System</h2>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default FirstTab;

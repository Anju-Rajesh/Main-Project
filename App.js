// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import DonorRegistration from './components/donerregisteration/DonorRegistration'; // Corrected the import name

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {user && <Route path="/" exact element={<Homepage />} />}
        <Route path="/signup" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/donor-registration" exact element={<DonorRegistration />} /> {/* Add this line */}
        {!user && <Route path="/" element={<Navigate replace to="/login" />} />}
      </Routes>
    </Router>
  );
}

export default App;
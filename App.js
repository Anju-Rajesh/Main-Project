import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Homepage from './components/Main/Homepage';
import Register from './components/Signup/Register';


function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {user && <Route path="/" exact element={<Homepage/>} />}
        <Route path="/signup" exact element={<Register} />
        <Route path="/login" exact element={<Login/>} />
        {!user && <Route path="/" element={<Navigate replace to="/login" />} />}
      </Routes>
    </Router>
  );
}

export default App;
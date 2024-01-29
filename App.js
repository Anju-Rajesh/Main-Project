// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Page from './components/page/Page';
import AdminLogin from './components/login/AdminLogin';
import DonorList from './components/donorList/DonorList';
import AdminHomepage from './components/homepage/AdminHomepage';
import UserViewDelete from './components/viewdelete/UserViewDelete';
import Donerregistration from './components/donerregisteration/Donorregistration';
import DonorLogin from './components/donorLogin/DonorLogin';
import Home from './components/homepage/Home';







function App() {
  const user = localStorage.getItem("token");

  return (  
    <Router>
      <Routes>
        {user && <Route path="/" exact element={<Homepage />} />}
        <Route path="/signup" exact element={<Register />} />
        <Route path="/user-login" exact element={<Login />} />
        {!user && <Route path="/" element={<Navigate replace to="/page" />} />}
        <Route path='/page' exact element={<Page/>}/>
        <Route path='/admin-login' exact element={<AdminLogin/>} />
        <Route path='/donor-list' exact element={<DonorList />} />
        <Route path='/adminHomepage' exact element={<AdminHomepage/>} />
        <Route path='/userViewDelete' exact element={<UserViewDelete />} />
        <Route path='/donorRegistration' exact element={<Donerregistration/>} />
        <Route path='/donorLogin' exact element={<DonorLogin/>}/>
        <Route path='/home' exact element={<Home />} />




      </Routes>
    </Router>
  );
}

export default App;












// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import Homepage from './components/homepage/Homepage';
// import Register from './components/register/Register';
// import Login from './components/login/Login';
// import Page from './components/page/Page';
// import AdminLogin from './components/login/AdminLogin';
// // import DonorRegistration from './components/donerregisteration/Donorregistration'; 
// // import DonorProfile from './components/donorProfile/DonorProfile';

// function App() {
//   const user = localStorage.getItem("token");

//   return (
//     <Router>
//       <Routes>
//         {user && <Route path="/page" exact element={<Page />} />}
//         <Route path="/signup" exact element={<Register />} />
//         <Route path="/user-login" exact element={<Login />} />
//         <Route path="/" exact element={<Homepage />} /> 
//         {/* <Route path="/donor-profile" exact element={<DonorProfile />} /> Add this line for the donor profile */}
//         {/* <Route path="/page" exact element={<DonorRegistration />} />  */}
//         <Route path="/admin-login" exact element={<AdminLogin/>} /> 
        

//         {!user && <Route path="/" element={<Navigate replace to="/user-login" />} />}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// // import React from 'react';
// // import DonorList from './components/donorList/DonorList';

// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Donor List</h1>
// //       <DonorList />
// //     </div>
// //   );
// // }

// // export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Homepage from './components/page/Page';
// import AdminLogin from './components/login/AdminLogin'; // Import your AdminLogin component
// import UserLogin from './components/login/Login'; // Import your UserLogin component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/user-login" element={<UserLogin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

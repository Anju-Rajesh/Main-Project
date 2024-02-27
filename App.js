// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Page from './components/page/Page';
import AdminLogin from './components/login/AdminLogin';
import DonorList from './components/donorList/DonorList';
import DonorListUser from './components/donorList/DonorListUser';
import AdminHomepage from './components/homepage/AdminHomepage';
import UserViewDelete from './components/viewdelete/UserViewDelete';
import Donerregistration from './components/donerregisteration/Donorregistration';
import DonorLogin from './components/donorLogin/DonorLogin';
import Home from './components/homepage/Home';
import DonorRequestsAdmin from './components/request/DonorRequestAdmin';
import About from './components/page/about';
import DonorHomepage from './components/homepage/DonorHomepage';
import DonorProfile from './components/donorProfile/DonorProfile';
import BloodRequest from './components/user/BloodRequest';
import BloodRequestAdmin from './components/admin/BloodrequestAdmin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/userhomepage" element={<Homepage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/user-login" element={<Login />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/donor-list' element={<DonorList />} />
        <Route path='/donor-list-user' element={<DonorListUser />} />
        <Route path='/adminHomepage' element={<AdminHomepage />} />
        <Route path='/userViewDelete' element={<UserViewDelete />} />
        <Route path='/donorRegistration' element={<Donerregistration />} />
        <Route path='/donorLogin' element={<DonorLogin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/donorRequestAdmin' element={<DonorRequestsAdmin />} />
        <Route path='/about' element={<About />} />
        <Route path='/donorHomepage' element={<DonorHomepage />} />
        <Route path='/donorProfile' element={<DonorProfile />} />
        <Route path='/bloodRequest' element={<BloodRequest />} />
        <Route path='/bloodRequestAdmin' element={<BloodRequestAdmin/>} />

      </Routes>
    </Router>
  );
}

export default App;

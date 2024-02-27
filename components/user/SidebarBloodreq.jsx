import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/page');
        window.location.reload();

    };

    const goToDonorList = () => {
        navigate('/donor-list-user');
    };

    const goToBloodRequest = () => {
        navigate('/bloodRequest');
    };
    // const goToDonorRegistration = () => {
    //     navigate('/donorRegistration');
    // };

    const goToDonorLogin = () => {
        navigate('/donorLogin');
    };

    const goToUserProfile = () => {
        navigate('/UserProfile');
    };

    return (
        <div style={{
            width: '200px',
            backgroundColor: '#333',
            color: '#fff',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <h1 style={{ color: '#fff' }}>The Blood Link</h1>
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={goToDonorList}>
                DONORS
            </button>
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={goToBloodRequest}>
                BLOOD REQUEST
            </button>

            {/* <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={goToDonorRegistration}>
                Donor Registration
            </button> */}
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={goToDonorLogin}>
                DONOR LOGIN
            </button>
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={goToUserProfile}>
                USERPROFILE
            </button>
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/userhomepage')}>
                HOME
            </button>
            <button style={{ padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={handleLogout}>
                LOGOUT
            </button>
        </div>
    );
};

export default Sidebar;

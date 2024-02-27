// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

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
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/donor-list')}>
                DONOR
            </button>
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/userViewDelete')}>
                USER
            </button>
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/donorRequestAdmin')}>
                REQUESTS
            </button>
            <button style={{ marginBottom: '10px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/adminHomepage')}>
                HOME
            </button>
            <button style={{ padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/')}>
                LOGOUT
            </button>
        </div>
    );
};

export default Sidebar;

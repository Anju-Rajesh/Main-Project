import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const goToDonorList = () => {
        navigate('/donor-list');
    };

    const goToUserViewDelete = () => {
        navigate('/userViewDelete');
    };

    const goToDonorRequestAdmin = () => {
        navigate('/donorRequestAdmin');
    };

    const logout = () => {
        navigate('/');
    };

    const goToHome = () => {
        navigate('/adminHomepage');
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
            <h1 style={{
                color: '#fff',
                marginBottom: '20px',
            }}>The Blood Link</h1>
            <button style={{
                marginBottom: '8px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer'
            }} onClick={goToDonorList}>DONOR</button>
            <button style={{
                marginBottom: '8px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer'
            }} onClick={goToUserViewDelete}>USER</button>
            <button style={{
                marginBottom: '8px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer'
            }} onClick={goToDonorRequestAdmin}>REQUESTS</button>
            <button style={{
                marginBottom: '8px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer'
            }} onClick={goToHome}>HOME</button>
            <button style={{marginBottom: '8px', padding: '8px', width: '100%', backgroundColor: '#cd0519', color: '#fff', border: 'none', cursor: 'pointer'
            }} onClick={logout}>LOGOUT</button>
        </div>
    );
};

export default Sidebar;

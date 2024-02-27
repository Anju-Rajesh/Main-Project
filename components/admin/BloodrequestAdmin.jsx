// components/DonorDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sidebarbloodreq';

const BloodRequestAdmin = () => {
    const [bloodRequests, setBloodRequests] = useState([]);

    useEffect(() => {
        const fetchBloodRequests = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/bloodRequest/requests');
                setBloodRequests(response.data);
            } catch (error) {
                console.error('Error fetching blood requests:', error);
            }
        };

        fetchBloodRequests();
    }, []);

    const handleAction = async (id, action) => {
        try {
            await axios.put(`http://localhost:8080/api/bloodRequest/requests/${id}`, { action });
            const response = await axios.get('http://localhost:8080/api/bloodRequest/requests');
            setBloodRequests(response.data);
        } catch (error) {
            console.error('Error updating blood request:', error);
        }
    };

    return (
        <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Blood Requests</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={tableHeadingStyle}>Name</th>
                            <th style={tableHeadingStyle}>Blood Group</th>
                            <th style={tableHeadingStyle}>Reason</th>
                            <th style={tableHeadingStyle}>Place</th>
                            <th style={tableHeadingStyle}>Contact</th>
                            <th style={tableHeadingStyle}>Status</th>
                            <th style={tableHeadingStyle}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bloodRequests.map((request) => (
                            <tr key={request._id}>
                                <td style={tableCellStyle}>{request.name}</td>
                                <td style={tableCellStyle}>{request.bloodGroup}</td>
                                <td style={tableCellStyle}>{request.reason}</td>
                                <td style={tableCellStyle}>{request.place}</td>
                                <td style={tableCellStyle}>{request.contact}</td>
                                <td style={tableCellStyle}>{request.status}</td>
                                <td style={tableCellStyle}>
                                    {request.status === 'pending' && (
                                        <>
                                            <button style={buttonStyle} onClick={() => handleAction(request._id, 'accepted')}>Accept</button>
                                            <button style={buttonStyle} onClick={() => handleAction(request._id, 'rejected')}>Reject</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const tableHeadingStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
};

const tableCellStyle = {
    borderBottom: '1px solid #ddd',
    padding: '10px',
};

const buttonStyle = {
    backgroundColor: '#cd0519',
    color: '#fff',
    padding: '8px',
    marginRight: '5px',
    border: 'none',
    cursor: 'pointer',
};

export default BloodRequestAdmin;

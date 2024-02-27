// src/components/BloodRequestForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './BloodRequest.css';
import Sidebar from './SidebarBloodreq'; // Import the Sidebar component

const BloodRequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        bloodGroup: '',
        reason: '',
        place: '',
        contact: '',
        status: 'pending',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8080/api/bloodRequest/request', formData);
            setSuccessMessage('Blood request submitted successfully!');
            setFormData({
                name: '',
                bloodGroup: '',
                reason: '',
                place: '',
                contact: '',
                status: 'pending',
            });
        } catch (error) {
            console.error('Error submitting blood request:', error);
            setSuccessMessage('Error submitting blood request. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
            <Sidebar />
            <div style={containerStyle}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Blood Donation Request Form</h2>
                <div style={boxStyle}>
                    {successMessage && <div style={successMessageStyle}>{successMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <label style={labelStyle}>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </label>
                        <label style={labelStyle}>
                            Blood Group:
                            <input
                                type="text"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </label>
                        <label style={labelStyle}>
                            Reason:
                            <input
                                type="text"
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </label>
                        <label style={labelStyle}>
                            District:
                            <input
                                type="text"
                                name="place"
                                value={formData.place}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </label>
                        <label style={labelStyle}>
                            Contact:
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </label>
                        <button type="submit" style={buttonStyle}>Submit Request</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Styles (unchanged)
const containerStyle = {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const boxStyle = {
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
};

const labelStyle = {
    display: 'block',
    margin: '10px 0',
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
};

const buttonStyle = {
    backgroundColor: '#cd0519',
    color: '#fff',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
};

const successMessageStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
};

export default BloodRequestForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sidebarUser'; // Import the Sidebar component

const DonorList = () => {
    const [donors, setDonors] = useState([]);
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                if (selectedBloodGroup) {
                    setLoading(true);
                    const response = await axios.get(`http://localhost:8080/api/donorfetch/donors/${selectedBloodGroup}`);
                    console.log('Fetched Data:', response.data.data);
                    setDonors(response.data.data);
                    setLoading(false);
                } else {
                    setDonors([]);
                }
            } catch (error) {
                console.error('Error fetching donors:', error);
                setLoading(false);
            }
        };

        fetchDonors();
    }, [selectedBloodGroup]);

    const handleBloodGroupChange = (e) => {
        setSelectedBloodGroup(e.target.value);
        setDonors([]);
    };

    console.log('Rendering DonorList component');
    console.log('Selected Blood Group:', selectedBloodGroup);
    console.log('Donors:', donors);

    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar Component */}
            <Sidebar />
            <div style={{ padding: '20px', flexGrow: '1' }}>
                <h1>Donor List</h1>
                <label>Select Blood Group:</label>
                <select value={selectedBloodGroup} onChange={handleBloodGroupChange}>
                    <option value="">-- Select Blood Group --</option>
                    <option value="O+">O+</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O-">O-</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                </select>

                {loading ? (
                    <p>Loading donors...</p>
                ) : donors.length > 0 ? (
                    <ul key={selectedBloodGroup}>
                        {donors.map(donor => (
                            <li key={donor._id}>
                                <div style={{ border: '1px solid #8B0000', padding: '10px', marginBottom: '10px', color: 'black' }}>
                                    <div><strong>Name:</strong> {donor.firstName} {donor.lastName}</div>
                                    <div><strong>Email:</strong> {donor.email}</div>
                                    <div><strong>Blood Group:</strong> {donor.bloodGroup}</div>
                                    <div><strong>Contact Number:</strong> {donor.contactNumber}</div>
                                    <div><strong>Address:</strong> {donor.address}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3><br />{selectedBloodGroup ? "No donors available for the selected blood group." : "Please select a blood group."}</h3>
                )}
            </div>
        </div>
    );
};

export default DonorList;

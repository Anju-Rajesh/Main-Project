// DonorProfile.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const DonorProfile = () => {
    const { email } = useParams();
    const [donor, setDonor] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDonorProfile = async () => {
            try {
                if (!email) {
                    // Handle the case when email is undefined
                    setError('Email parameter is missing');
                    return;
                }

                const response = await axios.get(`/api/donorEditDelete/donorProfile/${email}`);
                setDonor(response.data.data);
            } catch (error) {
                setError('Error fetching donor profile');
            }
        };

        fetchDonorProfile();
    }, [email]);

    const handleEdit = () => {
        // Redirect to the edit page or open a modal for editing
        // You can use react-router or any other method for navigation
        console.log('Edit clicked');
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this donor?')) {
            try {
                await axios.delete(`/api/donorEditDelete/donorDelete/${donor.email}`);
                // Redirect to donor homepage or any other page after deletion
                console.log('Donor deleted successfully');
            } catch (error) {
                setError('Error deleting donor');
            }
        }
    };

    return (
        <div>
            {error && <div>{error}</div>}
            <h2>Donor Profile</h2>
            <div>
                <strong>Name:</strong> {donor.firstName} {donor.lastName}
            </div>
            <div>
                <strong>Email:</strong> {donor.email}
            </div>
            <div>
                <strong>Blood Group:</strong> {donor.bloodGroup}
            </div>
            <div>
                <strong>Contact Number:</strong> {donor.contactNumber}
            </div>
            <div>
                <strong>Address:</strong> {donor.address}
            </div>
            <div>
                <strong>Registration Request:</strong> {donor.registrationRequest}
            </div>
            <div>
                <Link to={`/api/donorEditDelete/donorUpdate/${donor.email}`}>
                    <button onClick={handleEdit}>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default DonorProfile;

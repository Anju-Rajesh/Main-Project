import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';

const DonorRequestsAdmin = () => {
  const [donorList, setDonorList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/donors/admin/pendingDonors');
        console.log('response data:', res.data);

        const pendingDonorsArray = res.data.pendingDonors || [];
        setDonorList(pendingDonorsArray);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
  }, []);

  console.log('Donor List:', donorList);

  const handleAcceptance = async (userId) => {
    try {
      await axios.put(`http://localhost:8080/api/donors/admin/accept-registration/${userId}`);
      alert('User registration accepted!');
      window.location.reload();
    } catch (error) {
      console.error('Error accepting registration:', error);
      handleRequestError(error);
    }
  };

  const handleRejection = async (userId) => {
    try {
      await axios.put(`http://localhost:8080/api/donors/admin/reject-registration/${userId}`);
      alert('User registration rejected!');
      window.location.reload();
    } catch (error) {
      console.error('Error rejecting registration:', error);
      handleRequestError(error);
    }
  };

  const handleRequestError = (error) => {
    console.error('Error accepting/rejecting registration:', error);
    if (error.response) {
      console.error('Server responded with status:', error.response.status);
      console.error('Response data:', error.response.data);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received from the server');
    } else {
      console.error('Error setting up the request:', error.message);
    }
    alert('Error accepting/rejecting registration. Please try again.');
  };

  return (
    <div style={{
      display: "flex",
      backgroundColor: "#f4f4f4",
    }}>
      <Sidebar style={{ backgroundColor: "black" }} />
      <div style={{
        flex: "1",
        padding: "20px",
      }}>
        <h1 style={{ color: "#333" }}>Donor Request</h1>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Email</th>
              <th style={tableHeaderStyle}>Blood Group</th>
              <th style={tableHeaderStyle}>Address</th>
              <th style={tableHeaderStyle}>Contact Number</th>
              <th style={tableHeaderStyle}></th>
            </tr>
          </thead>
          <tbody>
            {donorList.map((donor) => (
              <tr key={donor._id}>
                <td style={tableCellStyle}>{donor.firstName} {donor.lastName}</td>
                <td style={tableCellStyle}>{donor.email}</td>
                <td style={tableCellStyle}>{donor.bloodGroup}</td>
                <td style={tableCellStyle}>{donor.address}</td>
                <td style={tableCellStyle}>{donor.contactNumber}</td>
                <td style={tableCellStyle}>
                  <button style={buttonStyle} onClick={() => handleAcceptance(donor._id)}>
                    Accept
                  </button>
                  <button style={buttonStyle} onClick={() => handleRejection(donor._id)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: "#990000",
  color: "white",
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center",
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "#cd0519",
  color: "#fff",
  padding: "10px 15px",
  marginBottom: "10px",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  borderRadius: "5px",
  width: "100%",
  transition: "background-color 0.3s ease",
};

export default DonorRequestsAdmin;


// DonorList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";

const DonorList = () => {
    const [donors, setDonors] = useState([]);
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('');

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                if (selectedBloodGroup) {
                    const response = await axios.get(`http://localhost:8080/api/donorfetch/donors/${selectedBloodGroup}`);
                    setDonors(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching donors:', error);
            }
        };

        fetchDonors();
    }, [selectedBloodGroup]);

    return (
        <div>
            <h1>Donor List</h1>
            <label>Select Blood Group:</label>
            <select value={selectedBloodGroup} onChange={(e) => setSelectedBloodGroup(e.target.value)}>
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

            <ul>
                {donors.map(donor => (
                    <li key={donor._id}>
                        <div className={styles.donorInfo}>
                            <div><strong>Name:</strong> {donor.firstName} {donor.lastName}</div>
                            <div><strong>Email:</strong> {donor.email}</div>
                            <div><strong>Blood Group:</strong> {donor.bloodGroup}</div>
                            <div><strong>Contact Number:</strong> {donor.contactNumber}</div>
                            <div><strong>Address:</strong> {donor.address}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DonorList;




















// import React, { useState, useEffect } from 'react';
// import styles from "./styles.module.css";

// const DonorList = () => {
//     const [bloodGroups, setBloodGroups] = useState([]);
//     const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
//     const [donors, setDonors] = useState([]);

//     useEffect(() => {
//         // Fetch available blood groups
//         fetch('/api/bloodgroup/bloodgroups')
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Fetched Blood Groups:", data);
//                 setBloodGroups(data.data);
//             })
//             .catch(error => console.error('Error fetching blood groups:', error));
//     }, []);

//     useEffect(() => {
//         // Fetch full details of donors based on selected blood group
//         const apiUrl = selectedBloodGroup ? `/api/donorfetch/donors/${selectedBloodGroup}` : '/api/donorfetch/donors/all';

//         console.log("API URL:", apiUrl);

//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Fetched Donors:", data);
//                 setDonors(data.data);
//             })
//             .catch(error => console.error('Error fetching donors:', error));
//     }, [selectedBloodGroup]);

//     console.log("Blood Groups:", bloodGroups);
//     console.log("Selected Blood Group:", selectedBloodGroup);
//     console.log("Donors:", donors);

//     return (
//         <div>
//             <label>Select Blood Group:</label>
//             <select onChange={(e) => setSelectedBloodGroup(e.target.value)}>
//                 <option value="">-- Select --</option>
//                 <option value="O+">O+</option>
//                 <option value="A+">A+</option>
//                 <option value="B+">B+</option>
//                 <option value="AB+">AB+</option>
//                 <option value="O-">O-</option>
//                 <option value="A-">A-</option>
//                 <option value="B-">B-</option>
//                 <option value="AB-">AB-</option>
//                 {bloodGroups.map((group, index) => (
//                     <option key={index} value={group}>{group}</option>
//                 ))}
//             </select>

//             <hr />

//             <h2>Donors with Blood Group: {selectedBloodGroup || 'All'}</h2>
//             {donors.map(donor => (
//                 <div key={donor._id}>
//                     <p>Name: {donor.firstName} {donor.lastName}</p>
//                     <p>Email: {donor.email}</p>
//                     <p>Password: {donor.password}</p>
//                     <p>Contact Number: {donor.contactNumber}</p>
//                     <p>Address: {donor.address}</p>
//                     {/* Add more details as needed */}
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default DonorList;

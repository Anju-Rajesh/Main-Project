import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sidebar'; // Import the Sidebar component

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/userviewdelete/ViewUsers');
                setUsers(response.data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (email) => {
        try {
            await axios.delete(`http://localhost:8080/api/userviewdelete/DeleteUser/${email}`);
            setUsers(users.filter(user => user.email !== email));
            console.log('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div style={{
            display: 'flex',
            backgroundColor: '#f4f4f4',
        }}>
            <Sidebar style={{
                width: '200px',
                backgroundColor: '#666',
                color: '#fff',
                minHeight: '100vh',
            }} /> {/* Include the Sidebar component here */}
            <div style={{
                flex: '1',
                padding: '20px',
            }}>
                <h1 style={{ color: '#333' }}>User List</h1>
                <ul>
                    {users.map(user => (
                        <li key={user._id} style={{ marginBottom: '20px' }}>
                            <div style={{
                                border: '1px solid #ddd',
                                padding: '15px',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                            }}>
                                <div><strong>Name:</strong> {user.firstName} {user.lastName}</div>
                                <div><strong>Email:</strong> {user.email}</div><br />
                            </div>
                            <button style={{
                                backgroundColor: '#cd0519',
                                color: '#fff',
                                padding: '10px 15px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                borderRadius: '5px',
                                marginTop: '10px',
                                transition: 'background-color 0.3s ease',
                            }} onClick={() => handleDeleteUser(user.email)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserList;

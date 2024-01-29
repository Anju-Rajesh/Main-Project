// UserList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";

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
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <div className={styles.userInfo}>
                            <div><strong>Name:</strong> {user.firstName} {user.lastName}</div>
                            <div><strong>Email:</strong> {user.email}</div>
                        </div>
                        <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
                        <br/><br/>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default UserList;

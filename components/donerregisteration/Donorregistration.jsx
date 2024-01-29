import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import axios from 'axios';
import { useState } from 'react';

const Donerregistration = () => {
    const [data, setData] = useState({

        firstName: '',
        lastName: '',
        email: '',
        password: '',
        bloodGroup: '',
        contactNumber: '',
        address: '',

    });

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Request Payload:", data); // Log the request payload
        try {
            const url = "http://localhost:8080/api/donors/donorRegister";
            const { data: res } = await axios.post(url, data);
            navigate("/donorlogin");
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/donorLogin" >
                        <button type='button' className={styles.white_btn}>
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        {/* <h1>Create Account</h1> */}

                        <input
                            type="String"
                            placeholder="FirstName"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                         <input
                            type="String"
                            placeholder="lastName"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        <input
                            type="String"
                            placeholder="bloodGroup"
                            name="bloodGroup"
                            onChange={handleChange}
                            value={data.bloodGroup}
                            required
                            className={styles.input}
                        />
                        
                         <input
                            type="String"
                            placeholder="contactNumber"
                            name="contactNumber"
                            onChange={handleChange}
                            value={data.contactNumber}
                            required
                            className={styles.input}
                        />
                        <input
                            type="String"
                            placeholder="address"
                            name="address"
                            onChange={handleChange}
                            value={data.address}
                            required
                            className={styles.input}
                        /> 
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Sign Up
                        </button>

                    </form>
                </div>
            </div>
        </div>

    )
};
export default Donerregistration;





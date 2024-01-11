import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    const [data, setData] = useState({
        role: "",
        name: "",
        email: "",
        password: "",
        phone:  ""
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
            const url = "http://localhost:8000/api/v1/auth/register";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
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
                    <Link to="/login" >
                        <button type='button' className={styles.white_btn}>
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>

                        <input
                            type="String"
                            placeholder="Role"
                            name="role"
                            onChange={handleChange}
                            value={data.role}
                            required
                            className={styles.input}
                        />
                        <input
                            type="String"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {/* <input
                            type="String"
                            placeholder="Bloodgroup"
                            name="bloodgroup"
                            onChange={handleChange}
                            value={data.bloodgroup}
                            required
                            className={styles.input}
                        />
                        <input
                            type="String"
                            placeholder="Address"
                            name="address"
                            onChange={handleChange}
                            value={data.address}
                            required
                            className={styles.input}
                        /> */}

                        <input
                            type="String"
                            placeholder="Phone"
                            name="phone"
                            onChange={handleChange}
                            value={data.phone}
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
export default Register;





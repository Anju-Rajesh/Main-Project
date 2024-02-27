import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth/login";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/userhomepage";
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

    const goToHomePage = () => {
        window.location.href = "/";
    };

    return (
        <div style={{
            width: '213vh',
            minHeight: '90vh',
            backgroundColor: '#f5f5f5',
            backgroundImage: "url('../Images/registration.jpg')",
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                width: '900px',
                height: '500px',
                display: 'flex',
                borderRadius: '10px',
                boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
            }}>
                <div style={{
                    flex: '2',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                }}>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }} onSubmit={handleSubmit}>
                        <h1 style={{
                            fontSize: '40px',
                            marginTop: '0',
                        }}>Login to Your Account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            style={{
                                outline: 'none',
                                border: 'none',
                                width: '370px',
                                padding: '15px',
                                borderRadius: '10px',
                                backgroundColor: '#edf5f3',
                                margin: '5px 0',
                                fontSize: '14px',
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            style={{
                                outline: 'none',
                                border: 'none',
                                width: '370px',
                                padding: '15px',
                                borderRadius: '10px',
                                backgroundColor: '#edf5f3',
                                margin: '5px 0',
                                fontSize: '14px',
                            }}
                        />
                        {error && <div style={{
                            width: '370px',
                            padding: '15px',
                            margin: '5px 0',
                            fontSize: '14px',
                            backgroundColor: '#f34646',
                            color: 'white',
                            borderRadius: '5px',
                            textAlign: 'center',
                        }}>{error}</div>}
                        <button type="submit" style={{
                            backgroundColor: '#a20b06',
                            color: 'white',
                            border: 'none',
                            outline: 'none',
                            padding: '12px 0',
                            borderRadius: '20px',
                            width: '180px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            cursor: 'pointer',
                            margin: '10px',
                        }}>Sign In</button>
                    </form>
                </div>
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#a20b06',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                }}>
                    <h1 style={{
                        marginTop: '0',
                        color: 'white',
                        fontSize: '40px',
                        alignSelf: 'center',
                    }}>New Here ?</h1>
                    <Link to="/signup">
                        <button type="button" style={{
                            border: 'none',
                            outline: 'none',
                            padding: '12px 0',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            width: '180px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            cursor: 'pointer',
                            margin: '10px',
                            color: '#a20b06',

                        }}>Sign Up</button>
                    </Link>
                    <button type="button" style={{
                        border: 'none',
                        outline: 'none',
                        padding: '12px 0',
                        backgroundColor: 'white',
                        color: '#a20b06',
                        borderRadius: '20px',
                        width: '180px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer',
                        margin: '10px',
                    }} onClick={goToHomePage}>Home</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

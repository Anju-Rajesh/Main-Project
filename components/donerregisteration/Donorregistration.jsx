import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    const goToHomePage = () => {
        window.location.href = "/userhomepage";
    };

    return (
        <div style={{
            width: '100vw',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            backgroundImage: 'url("../Images/registration.jpg")',
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
                boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
            }}>
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#a20b06',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                }}>
                    <h1 style={{
                        marginTop: '0',
                        color: 'white',
                        fontSize: '35px',
                        alignSelf: 'center',
                    }}>Welcome Back</h1>
                    <Link to="/donorLogin" >
                        <button type='button' style={{
                            border: 'none', outline: 'none', padding: '12px 0', backgroundColor: 'white', borderRadius: '20px', width: '180px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', color: '#a20b06', margin: '10px'
                        }}>
                            Sign In
                        </button>
                    </Link>

                    <button type="button" style={{
                        border: 'none', outline: 'none', padding: '12px 0', backgroundColor: 'white', borderRadius: '20px', width: '180px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', color: '#a20b06', margin: '10px'
                    }} onClick={goToHomePage}>
                        Home
                    </button>

                </div>
                <div style={{
                    flex: '2',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                }}>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }} onSubmit={handleSubmit}>
                        <input
                            type="String"
                            placeholder="FirstName"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
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
                            type="String"
                            placeholder="LastName"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
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
                        <input
                            type="String"
                            placeholder="BloodGroup"
                            name="bloodGroup"
                            onChange={handleChange}
                            value={data.bloodGroup}
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
                            type="String"
                            placeholder="ContactNumber"
                            name="contactNumber"
                            onChange={handleChange}
                            value={data.contactNumber}
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
                            type="String"
                            placeholder="Address"
                            name="address"
                            onChange={handleChange}
                            value={data.address}
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
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <button type="submit" style={{
                                backgroundColor: '#a20b06',
                                color: 'white',
                                padding: '12px 0',
                                border: 'none',
                                borderRadius: '20px',
                                width: '180px',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                cursor: 'pointer',
                                marginTop: '10px',
                            }}>
                                Send Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Donerregistration;

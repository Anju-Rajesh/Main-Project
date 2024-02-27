import { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/adminauth/adminLogin";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/adminHomepage";
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
        window.location.href = "/page";
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5"
        }}>
            <div style={{
                width: "900px",
                height: "500px",
                display: "flex",
                borderRadius: "10px",
                boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
            }}>
                <div style={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px"
                }}>
                    <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={handleSubmit}>
                        <h1 style={{ fontSize: "40px", marginTop: "0" }}>ADMIN LOGIN</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            style={{
                                outline: "none",
                                border: "none",
                                width: "370px",
                                padding: "15px",
                                borderRadius: "10px",
                                backgroundColor: "#edf5f3",
                                margin: "5px 0",
                                fontSize: "14px"
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
                                outline: "none",
                                border: "none",
                                width: "370px",
                                padding: "15px",
                                borderRadius: "10px",
                                backgroundColor: "#edf5f3",
                                margin: "5px 0",
                                fontSize: "14px"
                            }}
                        />
                        {error && <div style={{ width: "370px", padding: "15px", margin: "5px 0", fontSize: "14px", backgroundColor: "#f34646", color: "white", borderRadius: "5px", textAlign: "center" }}>{error}</div>}
                        <div style={{ display: "flex", justifyContent: "space-between", width: "370px" }}>
                            <button
                                type="submit"
                                style={{
                                    border: "none",
                                    outline: "none",
                                    padding: "12px 0",
                                    backgroundColor: "#a20b06",
                                    borderRadius: "20px",
                                    width: "180px",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    color: "white",
                                    margin: "10px"
                                }}
                            >
                                Sign In
                            </button>
                            <button
                                type="button"
                                onClick={goToHomePage}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    padding: "12px 0",
                                    backgroundColor: "#a20b06",
                                    borderRadius: "20px",
                                    width: "180px",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    color: "white",
                                    margin: "10px"
                                }}
                            >
                                Home
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;

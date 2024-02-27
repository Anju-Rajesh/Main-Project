import { useNavigate } from 'react-router-dom';
import img1 from '../Images/registration.jpg';

const AdminHomepage = () => {
    const navigate = useNavigate();

    const goToDonorList = () => {
        navigate('/donor-list');
    };

    const goToUserViewDelete = () => {
        navigate('/userViewDelete');
    };

    const goToDonorRequestAdmin = () => {
        navigate('/donorRequestAdmin');
    };

    const goToBloodRequestAdmin = () => {
        navigate('/bloodRequestAdmin');
    };

    const logout = () => {
        navigate('/');
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            margin: "0",
            padding: "0",
        }}>
            <nav style={{
                width: "100%",
                height: "70px",
                backgroundColor: "#a20b06",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
            }}>
                <h1 style={{
                    color: "white",
                    fontSize: "25px",
                    margin: "0",
                }}>The Blood Link</h1>
                <div style={{ display: "flex" }}>
                    <button style={{
                        backgroundColor: "#cd0519",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 15px",
                        margin: "0 10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease",
                    }} onClick={goToDonorList}>DONOR</button>
                    <button style={{
                        backgroundColor: "#cd0519",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 15px",
                        margin: "0 10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease",
                    }} onClick={goToUserViewDelete}>USER</button>
                    <button style={{
                        backgroundColor: "#cd0519",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 15px",
                        margin: "0 10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease",
                    }} onClick={goToDonorRequestAdmin}>REQUESTS</button>
                    <button style={{
                        backgroundColor: "#cd0519",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 15px",
                        margin: "0 10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease",
                    }} onClick={goToBloodRequestAdmin}> BLOOD REQUESTS</button>

                    <button style={{
                        backgroundColor: "#cd0519",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 15px",
                        margin: "0 10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease",
                    }} onClick={logout}>LOGOUT</button>
                </div>
            </nav>
            <img
                src={img1}
                alt="Img"
                style={{
                    width: '100vw',
                    height: '84vh',
                    objectFit: 'cover',
                    overflow: 'hidden',
                }}
            />
        </div>
    );
};

export default AdminHomepage;

// import { useNavigate } from 'react-router-dom';
// import styles from "./homepage.css";

// const Homepage = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         window.location.reload();
//     };

//     const goToDonorList = () => {
//         navigate('/donor-list-user');
//     };

//     const goToDonorRegistration = () => {
//         navigate('/donorRegistration');
//     };

//     const goToDonorLogin = () => {
//         navigate('/donorLogin');
//     };

//     const goToDonorProfile = () => {
//         navigate('/donorProfile');
//     };

//     return (
//         <div style={{
//             width: '100vw',
//             height: '100vh',
//             backgroundImage: "url('<your-background-image-url>')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'white', // Add text color
//             position: 'relative', // Make the navbar position relative to this container
//         }}>
//             <nav className={styles.navbar} style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(0, 0, 0, 0.5)' }}>
//                 <h1>The Blood Link</h1>
//                 <button onClick={goToDonorList}>Donor</button>
//                 <button onClick={goToDonorRegistration}>Donor Signup</button>
//                 <button onClick={goToDonorLogin}>Donor Signin</button>
//                 <button onClick={goToDonorProfile}>Donor Profile</button>
//                 <button className={styles.white_btn} onClick={handleLogout}>
//                     Logout
//                 </button>
//             </nav>
//         </div>
//     );
// };

// export default Homepage;



import { useNavigate } from 'react-router-dom';
import img1 from '../Images/registration.jpg';

const UserHomepage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const goToDonorList = () => {
        navigate('/donor-list-user');
    };

    const goToBloodRequest = () => {
        navigate('/bloodRequest');
    };

    // const goToDonorRegistration = () => {
    //     navigate('/donorRegistration');
    // };

    const goToDonorLogin = () => {
        navigate('/donorLogin');
    };

    const goToUserProfile = () => {
        navigate('/UserProfile');
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
                        }} onClick={goToBloodRequest}>BLOOD REQUEST</button>

                    {/* <button style={{
                        backgroundColor: "#cd0519",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 15px",
                        margin: "0 10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease",
                    }} onClick={goToDonorRegistration}>Donor Signup</button> */}
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
                    }} onClick={goToDonorLogin}>Donor Signin</button>
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
                    }} onClick={goToUserProfile}>User Profile</button>
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
                    }} onClick={handleLogout}>LOGOUT</button>
                </div>
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

export default UserHomepage;

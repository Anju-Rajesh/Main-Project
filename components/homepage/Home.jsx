// // Homepage.js
// import React from 'react'
// import { Link } from 'react-router-dom'
// // import DonorRegistration from './DonorRegistration'; // Corrected the import name
// import styles from "./styles.module.css"

// const Homepage = () => {
//     const handleLogout = () => {
//         localStorage.removeItem("token")
//         window.location.reload()
//     }

//     return (
//         <div className={styles.main_container}>
//             <nav className={styles.navbar}>
//                 <h1>Blood Donation</h1>
//                 <button className={styles.white_btn} onClick={handleLogout}>
//                     Logout
//                 </button>
//                 <Link to="/donor-registration">
//                     <button className={styles.white_btn}>
//                         Register as Donor
//                     </button>
//                 </Link>
//             </nav>

//             {/* Render the DonorRegistration component */}
//             <DonorRegistration />
//         </div>
//     )
// }

// export default Homepage;

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Homepage = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>The Blood Link</h1>
    
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    );
};

export default Homepage;
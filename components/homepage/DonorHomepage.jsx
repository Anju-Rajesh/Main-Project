import { useNavigate } from "react-router-dom";
import styles from "./homepage.css";

const DonorHomepage = () => {
    const navigate = useNavigate();

    const goToDonorList = () => {
        navigate('/donor-list');
    };

    const goToDonorProfile = () => {
        navigate('/donorProfile');
    };

    const logout = () => {
        navigate('/page');
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>The Blood Link</h1>
                <button onClick={goToDonorList}>DONOR</button>
                <button onClick={goToDonorProfile}>PROFILE</button>
                <button onClick={logout}>LOGOUT</button>
            </nav>
        </div>
    );
};

export default DonorHomepage;

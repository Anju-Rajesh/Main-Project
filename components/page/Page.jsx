// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './page.css'; // Import the CSS file

const Page = () => {
    return (
        <div>
            <header>
                <h1>The Blood Link</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin-login">Admin Login</Link>
                        </li>
                        <li>
                            <Link to="/user-login">User Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Page;

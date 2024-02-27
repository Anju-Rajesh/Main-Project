import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [theme, setTheme] = useState(0); // 0 for light theme, 1 for dark theme

    useEffect(() => {
        let savedTheme = localStorage.getItem("theme");
        if (!savedTheme) {
            savedTheme = 0;
            localStorage.setItem("theme", savedTheme);
        }
        setTheme(Number(savedTheme));
        document.documentElement.classList.toggle("dark", savedTheme === "1");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 0 ? 1 : 0;
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === 1);
    };

    return (
        <nav className="p-3 bg-white-900 sticky top-0 z-10 dark:bg-gray-bg">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <div className="flex items-center justify-between">
                        <img
                            className="h-14 w-auto ml-6"
                            src={logo}
                            draggable={false}
                            alt="Your Company"
                        />
                        <div className="text-2xl font-bold ml-2 text-blood">BloodLink</div>
                    </div>
                </Link>
                <div className="flex items-center justify-between space-x-4">
                    {/* Dropdown 1 */}
                    <DropDown
                        title="Dropdown 1"
                        children={["Option 1", "Option 2", "Option 3"]}
                        links={["/option1", "/option2", "/option3"]}
                    />

                    {/* Dropdown 2 */}
                    <DropDown
                        title="Dropdown 2"
                        children={["Option A", "Option B", "Option C"]}
                        links={["/optionA", "/optionB", "/optionC"]}
                    />

                    {/* Dropdown 3 */}
                    <DropDown
                        title="Dropdown 3"
                        children={["Item X", "Item Y", "Item Z"]}
                        links={["/itemX", "/itemY", "/itemZ"]}
                    />

                    {/* Theme Toggle Button */}
                    <button
                        className="mx-2 px-3 py-2 rounded-full hover:shadow-lg"
                        onClick={toggleTheme}
                    >
                        <i
                            className={`dark:text-white-900 fa-solid fa-lg fa-${theme === 0 ? "sun" : "moon"
                                }`}
                        ></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

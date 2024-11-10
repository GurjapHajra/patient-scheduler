import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // To redirect after logout

export default function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const resetLogin = () => {
        setIsLoggedIn(false);  // Reset state to logged out
        localStorage.removeItem("isLoggedIn");  // Remove login state from localStorage
        navigate("/login");  // Redirect to login page
    };

    return (
        <div>
        <button id="logout" onClick={resetLogin}>Reset Login</button>
        </div>
    );
}

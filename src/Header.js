import "./Header.css"

import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="">
            <div className="container">
                <div className="header-spacer"/>
                <p className="header_text">
                    Health advice group
                </p>

                <div className="login_container">
                    <button className="auth-button">Login</button>
                    <button className="auth-button">Sign Up</button>
                </div>
            </div>
            <div className="underline">
            </div>
        </div>
    )
}

export default Header;
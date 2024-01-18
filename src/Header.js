import "./Header.css"

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
const Header = () => {
    // const navigate=useNavigate()
    return (
        <div className="background-heading">
            <div className="container">
                <div className="header-spacer"/>
                <a className="header_text" href="/">
                    Health advice group
                </a>

                <div className="login_container">
                    <a className="auth-button" href="/login" >Login</a>
                    <a className="auth-button" href="/signup" >Sign Up</a>
                </div>
            </div>
            <div className="underline">
            </div>
        </div>
    )
}

export default Header;
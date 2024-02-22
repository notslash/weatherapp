import "./Header.css"




const Header = () => {
    // const navigate=useNavigate()

    const render_login = () => {
        if (localStorage.getItem("user")) { 
            return <a className="auth-button" href="/profile" >Profile</a> 
        } else {
            return <div className="login_container"><a className="auth-button" href="/login" >Login</a>
                <a className="auth-button" href="/signup" >Sign Up</a></div>
        }
    }

    return (
        <div className="background-heading">
            <div className="container">
                <div className="header-spacer" />
                <a className="header_text" href="/">
                    Health advice group
                </a>

                <div className="login_container">
                    {render_login()}
                </div>
            </div>
            <div className="underline">
            </div>
        </div>
    )
}

export default Header;
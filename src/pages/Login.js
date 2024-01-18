import "./Login.css"

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
            <h3 className="login-header">
                Login
            </h3>
            <form className="form-container">
                <input type="text"/>
                <input type="text"/>
                <button className="submit-button">Submit</button>
            </form>
</div>
        </div>
    )
}

export default Login;
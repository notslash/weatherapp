import "./signup.css"

const Signup = () => {
    return (
        <div className ="backgroud_signup">
            <div className="sign_container">
            <h3 className="signup-header">
                Signup
            </h3>
            <form className="sign_box">
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button className="submit-button">Submit</button>

            </form>
            </div>

        </div>
    )
}

export default Signup;
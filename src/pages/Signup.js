import "./signup.css"

import axios from "axios";
import { useState } from "react";

const Signup = () => {
    const [username, setusername] = useState('')
    const [password, SetPassword]=useState("")
    const [password2, SetPassword2]=useState("")
    const [user, setUser] = useState(null)

    return (
        <div className ="backgroud_signup">
            <div className="sign_container">
            <h3 className="signup-header">
                Signup
            </h3>
            <form className="sign_box" onSubmit={async (e) => {
                e.preventDefault()
                const res= await axios.get(`http://127.0.0.1:8000/api/data/new-user`)

                setUser({...res.data})
            }}>
                <input type="text" onChange={(e)=> setusername(e.target.value)} value={username}/>
                <input type="text" onChange={(e)=> SetPassword(e.target.value)} value={password}/>
                <input type="text" onChange={(e)=> SetPassword2(e.target.value)} value={password2}/>
                <button className="submit-button">Submit</button>

            </form>
            </div>
            <div>
                {user && user.username}
            </div>

        </div>
    )
}

export default Signup;
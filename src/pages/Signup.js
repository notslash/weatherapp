import "./signup.css"

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [username, setusername] = useState('')
    const [password, SetPassword] = useState("")
    const [password2, SetPassword2] = useState("")
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(false)

    const navigate=useNavigate()


    

    
    return (
        <div className="backgroud_signup">
            <div className="sign_container">
                <h3 className="signup-header">
                    Signup
                </h3>


                <form className="sign_box" onSubmit={async (e) => {
                    try {
                        e.preventDefault()
                        setError(false)
                        setUserData(null)
                        const res = await axios.post(`http://127.0.0.1:8000/api/data/new-user`, {
                            username, password, password2
                        })

                        
                        console.log(res.data)
                        
                        // if(password!==password2){setError(true)}
                        setUserData({ ...res.data })
                        localStorage.setItem("user",JSON.stringify(res.data.user))
                        navigate("/profile")
                    } catch (error) {
                        setError(true)
                    }

                }}>
                    <input type="text" required onChange={(e) => setusername(e.target.value)} value={username} placeholder="Username"/>
                    <input type="password" minLength= "8" required onChange={(e) => SetPassword(e.target.value)} value={password} placeholder="Passsword" />
                    <input type="password" minLength= "8" required onChange={(e) => SetPassword2(e.target.value)} value={password2} placeholder="Password" />
                    <input type="submit" value="submit" />

                </form>
            </div>
            <div style={{ color: "white" }}>
                {error &&<div>Passswords do not match</div>}
                
                
            </div>

            {/* {error&& <div>Passwords do not match</div>} */}
            



        </div>
    )
}

export default Signup;
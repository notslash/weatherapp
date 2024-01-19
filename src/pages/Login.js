import "./Profile.css"
import axios from "axios"
import { useState } from "react"

import { useEffect } from "react"
import { json } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const [username, setusername] = useState('')
    const [password, SetPassword] = useState("")
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(false)

    const navigate=useNavigate()


    
    return (
        <div className="backgroud_signup">
            <div className="log_container">
                <h3 className="login-header">
                    Profile
                </h3>


                <form className="Profile_box" onSubmit={async (e) => {
                    try {
                        e.preventDefault()
                        setError(false)
                        setUserData(null)
                        const res = await axios.get(`http://127.0.0.1:8000/api/data?username=${username}&password=${password}`)
                        
                        console.log(res.data)
                        
                        setUserData({ ...res.data })
                        localStorage.setItem("user",JSON.stringify(res.data.user))
                        navigate("/profile")
                    } catch (error) {
                        setError(true)
                    }

                }}>
                    <input type="text" onChange={(e) => setusername(e.target.value)} value={username} />
                    <input type="text" onChange={(e) => SetPassword(e.target.value)} value={password} />
                    <button className="submit-button">Submit</button>

                </form>
            </div>
            <div style={{ color: "white" }}>
                {error &&<div>Email or password is incorrect</div>}
                
                
            </div>

            {/* {error&& <div>Passwords do not match</div>} */}
            



        </div>
    )
}


export default Profile;
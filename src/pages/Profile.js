import "./Profile.css"
import axios from "axios"
import { useState } from "react"

import { useEffect } from "react"
import { json, Navigate } from "react-router-dom"
import Airq from "../Airq"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    
    const [newpass,Setnewpass]=useState()
    let navigate=useNavigate()
    
    async function login(){
    const res = await axios.get(`http://127.0.0.1:8000/api/data?username=${username}&password=${password}`)

return (
    <div className="background_profile">
            <div className="profile">Profile </div>
            {<div className="welcome_text">Welcome: {JSON.parse(localStorage.getItem("user")).username}</div>}
            <button id="airq_button" onClick={() => navigate("/airq")}>Air quality</button>
            <form>
                <div>
                    change your password
                </div>
                <input placeholder="enter new password" onChange={(e)=>Setnewpass(e.target.value)} value={password}></input>
                <input placeholder="enter new password"></input>
            </form>
            
        </div>

    )
}
}
export default Profile;
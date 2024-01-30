import "./Profile.css"
import axios from "axios"
import { useState } from "react"

import { useEffect } from "react"
import { json, Navigate } from "react-router-dom"
import Airq from "../Airq"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    
    const [newpass,Setnewpass]=useState("")
    const [newpass2,Setnewpass2]=useState("")

    let navigate=useNavigate()
    
    async function login(){
        
    const res = await axios.get(`http://127.0.0.1:8000/api/data/new-pass=${JSON.parse(localStorage.getItem("user")).username}&new_pass=${newpass}`)
    console.log(res.data)
    navigate("/login")
    }

return (
    <div className="background_profile">
            <div className="profile">Profile </div>
            {<div className="welcome_text">Welcome: {JSON.parse(localStorage.getItem("user")).username}</div>}
            <button id="airq_button" onClick={() => navigate("/airq")}>Air quality</button>
            <form onSubmit={async (e)=>{e.preventDefault(); await login();}}>
                <div>
                    change your password
                </div>
                <input placeholder="enter new password" onChange={(e)=>Setnewpass(e.target.value)} value={newpass}/>
                <input placeholder="enter new password" onChange={(e)=>Setnewpass2(e.target.value)} value={newpass2}/>

            </form>
            
        </div>

    )

}
export default Profile;
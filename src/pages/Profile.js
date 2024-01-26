import "./Profile.css"
import axios from "axios"
import { useState } from "react"

import { useEffect } from "react"
import { json, Navigate } from "react-router-dom"
import Airq from "../Airq"
import { useNavigate } from "react-router-dom"

const Profile = () => {

let navigate=useNavigate()


    return (
        <div className="background_profile">
            <div className="profile">Profile </div>
            {<div className="welcome_text">Welcome: {JSON.parse(localStorage.getItem("user")).username}</div>}
            <button id="airq_button" onClick={() => navigate("/airq")}>Air quality</button>
            
        </div>

    )
}

export default Profile;
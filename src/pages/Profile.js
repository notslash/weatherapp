import "./Profile.css"
import axios from "axios"
import { useState } from "react"

import { useEffect } from "react"
import { json } from "react-router-dom"

const Profile = () => {




    return (
        <div className="background_profile">
            <div className="profile">Profile </div>
            {<div className="welcome_text">Welcome: {JSON.parse(localStorage.getItem("user")).username}</div>}
        </div>

    )
}

export default Profile;
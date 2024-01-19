import "./Profile.css"
import axios from "axios"
import { useState } from "react"

import { useEffect } from "react"

const Profile =()=>{
    const [userData, setUserData] = useState(null)
    useEffect=(()=>{
        const get_data =async()=>{

            const res = await axios.post(`http://127.0.0.1:8000/api/data`)
            setUserData({...res.data})
            console.log(res)
            localStorage.setItem("user",JSON.stringify(res.data))
            
        }
        
        
})

    return(
        <div>
        <div className="background_profile">Profile </div>
        {userData && <div>Welcome: {localStorage.getItem("user")}</div>}
        </div>

    )
}

export default Profile;
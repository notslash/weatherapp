import "./Header.css"

import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <div className="">
           <div className="container">
            <p className="header_text">
                Health advice group   
            </p>
            
              <div className="login_container">
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
          
          
          
          
            </div>
            </div>
            <div className="underline">
        </div>  
        </div>
    )
}

export default Header;
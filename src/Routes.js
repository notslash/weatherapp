import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Airq from "./Airq";
import Carbon from "./pages/Carbon"
import Nitrogen from "./pages/Nitrogen"
import Ozone from "./pages/Ozone";
import Ammonia from "./pages/Ammonia";
import Particals2 from "./pages/Particals2";
import Particals1 from "./pages/Particals1";
import Sulphur from "./pages/Sulphur"
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/Privacy";
const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path ='/Signup' element={<Signup/>}/>
            <Route path ="/profile"element={<Profile/>}/>
            <Route path="/Airq" element={<Airq/>}/>
            <Route path="/Carbon" element={<Carbon/>}/>
            <Route path="/Nitrogen" element={<Nitrogen/>}/>
            <Route path="/Ozone" element={<Ozone/>}/>
            <Route path="Ammonia" element={<Ammonia/>}/>
            <Route path="Particals2" element={<Particals2/>}/>
            <Route path="Particals1" element={<Particals1/>}/>
            <Route path="Sulphur" element={<Sulphur/>}/>
            <Route path="AboutUs" element ={<AboutUs/>}/>
            <Route path="Privacy" element={<Privacy/>}/>
            
        </Routes>
        </BrowserRouter>

    )
}

export default Router;
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Airq from "./Airq";


const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path ='/Signup' element={<Signup/>}/>
            <Route path ="/profile"element={<Profile/>}/>
            <Route path="/Airq" element={<Airq/>}/>

        </Routes>
        </BrowserRouter>

    )
}

export default Router;
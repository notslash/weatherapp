import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";


const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path ='/Signup' element={<Signup/>}/>
            <Route path ="/profile"element={<Profile/>}/>

        </Routes>
        </BrowserRouter>

    )
}

export default Router;
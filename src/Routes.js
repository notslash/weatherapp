import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/pages/Login" element={<Login/>}/>
            <Route path ='/pages/Signup' element={<Signup/>}/>

        </Routes>
        </BrowserRouter>

    )
}

export default Router;
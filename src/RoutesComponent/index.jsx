import { Route, Routes } from "react-router"
import { Login } from "../login"
import { Project } from "../Project"

export const RouterComponent = () =>{
    return(
        <Routes>
            <Route path="/" element={<Login />} />
           <Route path="/project" element={<Project />} />
        </Routes>
    )
}
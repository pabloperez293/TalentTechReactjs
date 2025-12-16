import { Outlet } from "react-router-dom"
import  Navbar  from "../components/Navbar/Navbar"

export const MainLayout = () => {
    return <> 
        <Navbar />
        <div className="main-content">
            <Outlet /> 
        </div> 
    </>
}
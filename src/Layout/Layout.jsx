import { Outlet } from "react-router-dom";
import Navbar from "../Component/NavBar.jsx/Navbar";


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;
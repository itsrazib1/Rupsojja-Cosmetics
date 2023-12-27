import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Newpartone from "../pages/Home/newsection/partone";


const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            <Newpartone></Newpartone>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
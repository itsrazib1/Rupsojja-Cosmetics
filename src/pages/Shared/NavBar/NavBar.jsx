import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    console.log(user);

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Product</Link></li>
        <li><Link to="/order/salad">Order US</Link></li>
        {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> : 
            <li><Link to="/dashboard/userhome">Dashboard</Link></li>
        }
        <li>
            <Link to="/dashboard/mycart">
                <button className="btn btn-outline btn-success gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-accent">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost mt-5">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-25 max-w-screen-xl bg-gray-400 md:text-white sm:text-black">
                <div className="navbar-start">
                    <div className="dropdown -mt-5">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-white  text-xl">Rupsojja Cosmetics</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end me-10">
                    <a className=""><img className="h-[50px] rounded-full" src={user?.photoURL} alt="" /></a>
                    
                </div>
            </div>
        </>
    );
};

export default NavBar;
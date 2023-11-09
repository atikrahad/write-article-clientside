import { Link, NavLink } from "react-router-dom";
import "./Navcss.css";
import { useContext } from "react";
import { Authinfo } from "./Authprovider";

const Sideber = () => {
  const {user, handleLogoutuser} = useContext(Authinfo)

  const handleLogout = () => [
    handleLogoutuser()
  ]
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu navlink p-4 w-80 min-h-full bg-slate-900">
        {/* Sidebar content here */}

        {
          user ? <div className="flex flex-col py-2 gap-2">
          <img className="w-12 rounded-full" src={user.photoURL} alt="" />
          <div onClick={handleLogout}>
            <button className="btn text-white bg-sky-600 rounded-md  hover:text-blue-600 hover:rounded-md hover:border-sky-600">
              Logout
            </button>
          </div>
        </div> : <div className="py-3">
          <Link to="/login"><button className=" py-1 px-3 bg-sky-600 rounded-sm border-2 border-sky-600 text-white hover:bg-transparent hover:rounded-sm">
            Login
          </button></Link>
        </div>
        }

        <NavLink
          to="/"
          className="text-slate-300 font-semibold  py-1 rounded-sm px-3"
        >
          Home
        </NavLink>

        {
          user && <NavLink
          to="/addblog"
          className="text-slate-300 font-semibold  py-1 rounded-sm px-3"
        >
          Add Blog
        </NavLink>
        }

        <NavLink
          to="/allblog"
          className="text-slate-300 font-semibold  py-1 rounded-sm px-3"
        >
          All blogs
        </NavLink>

        <NavLink
          to="/feautures"
          className="text-slate-300 font-semibold  py-1 rounded-sm px-3"
        >
          Featured Blogs
        </NavLink>

        <NavLink
          to="/wishlist"
          className="text-slate-300 font-semibold  py-1 rounded-sm px-3"
        >
          Wishlist
        </NavLink>

        {
          !user && <NavLink
          to="/register"
          className="text-slate-300 font-semibold  py-1 rounded-sm px-3"
        >
          Register
        </NavLink>
        }
      </div>
    </div>
  );
};

export default Sideber;

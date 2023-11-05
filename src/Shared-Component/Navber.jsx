import { NavLink } from "react-router-dom";
import "./Navcss.css";
const Navber = () => {
  return (
    <div className="w-full lg:py-5 bg-slate-200">
      <div className="max-w-7xl mx-auto navbar">
        <div className="flex-1 lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-none lg:flex-1 px-2 mx-2">
          <div className="flex items-center">
            <h1 className="font-bold text-5xl text-sky-600">I</h1>
            <span className="text-4xl font-sans font-bold">.blo<span className="text-sky-600">G</span></span>
          </div>
        </div>
        <div className="flex-none hidden lg:block">
          <div className="flex navlink items-center gap-3">
            {/* Navbar menu content here */}

            <NavLink
              to="/"
              className="text-slate-600 font-semibold  py-1 rounded-sm px-3"
            >
              Home
            </NavLink>

            <NavLink
              to="/addblog"
              className="text-slate-600 font-semibold  py-1 rounded-sm px-3"
            >
              Add Blog
            </NavLink>

            <NavLink
              to="/allblog"
              className="text-slate-600 font-semibold  py-1 rounded-sm px-3"
            >
              All blogs
            </NavLink>

            <NavLink
              to="/feautures"
              className="text-slate-600 font-semibold  py-1 rounded-sm px-3"
            >
              Featured Blogs
            </NavLink>

            <NavLink
              to="/wishlist"
              className="text-slate-600 font-semibold  py-1 rounded-sm px3"
            >
              Wishlist
            </NavLink>

            <NavLink
              to="/register"
              className="text-slate-600 font-semibold  py-1 rounded-sm px-3"
            >
              Register
            </NavLink>

            <div className="pl-3">
              <button className="btn bg-sky-600 rounded-md  hover:text-blue-600 hover:rounded-md hover:border-sky-600">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
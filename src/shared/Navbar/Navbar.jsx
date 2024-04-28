/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

function Navbar({ type }) {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => toast.error(error.message));
  };

  const navList = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-crafts"}>All Art & Items</NavLink>
      </li>
      <li>
        <NavLink to={"/crafts/create"}>Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to={"/crafts/user"}>My Art&Craft List</NavLink>
      </li>
      <li>
        <NavLink to={"/categories"}>All Categories</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      className={`navbar ${
        type === "home" ? "bg-transparent" : "bg-[#FBE7E0]"
      }`}
    >
      <div className="navbar-start py-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">ClayZen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 ">{navList}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="tooltip" data-tip={user.displayName}>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/crafts/user" className="justify-between">
                    My Art&Craft List
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

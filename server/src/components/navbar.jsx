import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  function logoutAction() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-red-500 lg-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to="/">
                <li>
                  <a href="">Home</a>
                </li>
              </Link>
              <Link to="/category">
                <li>
                  <a href="">Product Categories</a>
                </li>
              </Link>
              <Link to="/addUser">
                <li>
                  <a href="">Add User</a>
                </li>
              </Link>
              <Link to="/add">
                <li>
                  <a href="">Add Product</a>
                </li>
              </Link>
            </ul>
          </div>
          <a
            href=""
            className="btn btn-ghost text-xl text-boneWhite hover:text-red-500"
          >
            The Locker
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <Link to="/">
              <li>
                <a className="font-semibold text-white hover:bg-red-500 hover:text-black">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/category">
              <li>
                <a className="font-semibold text-white hover:bg-red-500 hover:text-black">
                  Product Categories
                </a>
              </li>
            </Link>
            <Link to="/addUser">
              <li>
                <a className="font-semibold text-white hover:bg-red-500 hover:text-black">
                  Add User
                </a>
              </li>
            </Link>
            <Link to="/add">
              <li>
                <a className="font-semibold text-white hover:bg-red-500 hover:text-black">
                  Add Product
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-error" onClick={logoutAction}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

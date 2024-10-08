import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex justify-items-center align-items-center">
          <Link to="/">
            <a className="text-xl hover:text-red-500 transtion duration-300 ease-in-out font-semibold flex justify-items-center">
              The Locker
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

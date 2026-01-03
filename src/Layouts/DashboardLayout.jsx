import React, { useContext } from "react";
import { NavLink, Outlet, Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const DashboardLayout = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignout = () => {
    signOutUser().then().catch();
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-white shadow-sm shadow-emerald-600">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-emerald-600"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="flex-1 px-4">
              <Link to="/" className="font-bold text-emerald-600 text-xl">
                KRISHI<span className="text-yellow-500">LINK</span>
              </Link>
              <span className="text-gray-500 ml-2">/ Dashboard</span>
            </div>
            <div className="flex-none">
              <Link to="/" className="btn btn-ghost text-emerald-600 mr-2">
                ← Back to Home
              </Link>
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-6 bg-gray-50 min-h-screen">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col bg-white border-r border-gray-200 w-64">
            {/* User Profile Section */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col items-center text-center">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/50"}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <h3 className="font-bold text-gray-800">{user?.displayName || "User"}</h3>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <ul className="menu w-full p-4 space-y-2 flex-1">
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "text-gray-700 hover:bg-emerald-50"
                    }`
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "text-gray-700 hover:bg-emerald-50"
                    }`
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-crop"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "text-gray-700 hover:bg-emerald-50"
                    }`
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Crop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-posts"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "text-gray-700 hover:bg-emerald-50"
                    }`
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  My Posts
                </NavLink>
              </li>
            </ul>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleSignout}
                className="w-full flex items-center justify-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

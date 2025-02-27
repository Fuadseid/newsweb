import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 sm:justify-between p-10 shadow-lg">
            {/* Centered Links (Home and Favorite) */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-24">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white font-bold bg-blue-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                            : "text-zinc-100 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-300"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/favorite"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white font-bold bg-blue-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                            : "text-zinc-100 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-300"
                    }
                >
                    Favorite
                </NavLink>
            </div>

            {/* Profile Link (Rightmost Corner) */}
            <div className="mt-4 sm:mt-0">
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white font-bold bg-blue-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                            : "text-zinc-100 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-300"
                    }
                >
                    Profile
                </NavLink>
            </div>
        </div>
    );
}

export default Navigation;
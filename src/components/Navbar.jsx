import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-ras", label: "About RAs" },
    { path: "/about-event", label: "About Event" },
    { path: "/timeline", label: "Timeline" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">MyWebsite</Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-3">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition ${
                    isActive ? "bg-primary text-white" : "hover:bg-base-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

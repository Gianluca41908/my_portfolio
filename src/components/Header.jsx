import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="text-white p-3 fixed-top">
            <ul className="list-unstyled d-flex justify-content-between font-p pe-3">
                <li className="fs-4 ms-5 d-none d-md-block">
                    Gianluca
                </li>
                <div className="d-flex w-50 w-md-50 justify-content-evenly pe-5">
                    <li className="fs-4 pe-3 pe-md-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-decoration-none text-white header-link ${isActive ? "active-link" : ""}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="fs-4 pe-3 pe-md-0">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-decoration-none text-white header-link ${isActive ? "active-link" : ""}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="fs-4 pe-3 pe-md-0">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `text-decoration-none text-white header-link ${isActive ? "active-link" : ""}`
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="fs-4">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-decoration-none text-white header-link ${isActive ? "active-link" : ""}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );
}
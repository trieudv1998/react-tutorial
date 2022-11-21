import React from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";

const Sidebar = (props) => {

    const CustomLink = ({ children, to, ...props }) => {
        const resolved = useResolvedPath(to)
        const match = useMatch({ path: resolved.pathname, end: true })
        return (
            <li className={match ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }
    return (
        <>
            <h2 className="my-3 text-white">SideBar</h2>
            <div className="pt-3">
                <ul className="nav nav-pills flex-column">
                    <CustomLink to='/'>Dashboard</CustomLink>
                    <CustomLink to='/products'>Products</CustomLink>
                    <CustomLink to='/courses'>Courses</CustomLink>
                    <CustomLink to='/hooks'>Hooks</CustomLink>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;
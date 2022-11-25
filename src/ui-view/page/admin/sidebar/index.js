import React from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";

const Sidebar = (props) => {

    const MenuConfig = [
        { key: "dasboard", name: "Dashboard", path: "/", type: "item" },
        {
            key: "tutorial", name: "Tutorial", path: "/courses", type: "group", groups: [
                { key: "html", name: "Html", path: "/html" },
                { key: "css", name: "Css", path: "/css" },
            ]
        },
        {
            key: "hooks", name: "Hooks", path: "/hooks", type: "group", groups: [
                { key: "custom-hooks", name: "Custom Hooks", path: "/hooks/custom-hooks" },
                { key: "usecallback", name: "Use Callback", path: "/hooks/use-callback-hooks" },
                { key: "usememo", name: "Use Memo", path: "/hooks/use-memo-hooks" },
                { key: "useref", name: "Use Ref", path: "/hooks/use-ref-hooks" },
                { key: "useSearchParams", name: "useSearchParams", path: "/hooks/use-searchparams-hooks" },
            ]
        },
        { key: "exercises", name: "Exercises", path: "/exercises", type: "item" },
        { key: "lazyloading", name: "Lazy Loading", path: "/lazy-loading", type: "item" },

    ];

    const MenuUI = ({ children, ...props }) => {
        return <ul {...props}>{children}</ul>;
    };

    const MenuItem = ({ name, children, path, ...props }) => {
        const resolved = useResolvedPath(path)
        const match = useMatch({ path: resolved.pathname, end: true })
        return (
            <li className={match ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" to={path} {...props}>
                    {name}
                </Link>
                {children}
            </li>
        );
    };

    const SubMenuUI = ({ name, children, path, ...props }) => {
        const resolved = useResolvedPath(path)
        const match = useMatch({ path: resolved.pathname, end: true })
        return (
            <li>
                <Link className={match ? "nav-subitem active nav-link" : "nav-subitem nav-link"} to={path}>
                    {name}
                </Link>
                <ul {...props}>{children}</ul>
            </li>
        );
    };

    return (
        <>
            <h2 className="my-3 text-white">My Project</h2>
            <div className="pt-3">
                <MenuUI className="nav nav-pills flex-column">
                    {
                        MenuConfig.map((value, index) => {
                            if (value.type === 'item') {
                                return (
                                    <MenuItem
                                        key={index}
                                        name={value.name}
                                        path={value.path}
                                    />
                                )
                            }
                            if (value.type === 'group') {
                                return (
                                    <SubMenuUI
                                        name={value.name}
                                        path={value.path}
                                        key={index}
                                    >
                                        {
                                            // render 1 level only
                                            value.groups.map((sValue, sIndex) => {
                                                return (
                                                    <MenuItem
                                                        key={`${index + '_' + sIndex}`}
                                                        name={sValue.name}
                                                        path={sValue.path}
                                                    />
                                                );
                                            })
                                        }
                                    </SubMenuUI>
                                );
                            }
                            return null
                        })
                    }
                </MenuUI>
            </div>
        </>
    )
}
export default Sidebar;
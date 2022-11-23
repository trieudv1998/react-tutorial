import React from "react";
import { Link, Outlet } from "react-router-dom";
const topic = [
    { id: "baitap1",name: "Bài tập 1", path: "/exercises/hooks/useRef/exercise1" },
    { id: "baitap2",name: "Bài tập 2", path: "/exercises/hooks/useRef/exercise2" },
]
const ExcercisesPage = (props) => {
    return (
        <>
            <h1 className="h2">Ví dụ và thực hành</h1>
            <ul>
                {topic.map(hook => (
                    <li key={hook.id}>
                        <Link to={hook.path}>
                            {hook.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}
export default ExcercisesPage;
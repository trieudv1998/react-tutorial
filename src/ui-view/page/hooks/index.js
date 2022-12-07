import { Link, Outlet } from 'react-router-dom'

const hooks = [
    { id: "Custom Hooks", name: "Custom Hooks", type: "custom-hooks" },
    { id: "Use Callback Hooks", name: "Use Callback Hooks", type: "use-callback-hooks" },
    { id: "Use Memo Hooks", name: "Use Memo Hooks", type: "use-memo-hooks" },
    { id: "Use Ref Hooks", name: "Use Ref Hooks", type: "use-ref-hooks" },
    { id: "Use Reduce Hooks", name: "Use Reduce Hooks", type: "use-Reduces-hooks" },
]

const HooksPage = (props) => {
    return (
        <>
            <h1 className="h2">Khóa học React Hooks</h1>
            <ul>
                {hooks.map(hook => (
                    <li key={hook.id}>
                        <Link to={hook.type}>
                            {hook.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}

export default HooksPage
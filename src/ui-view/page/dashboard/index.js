import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Dashboard = (props) => {
    const navigate = useNavigate()

    const doLogout = () => {
        localStorage.removeItem("USER_INFO");
        setTimeout(() => {
            navigate('/login', { replace: true })
        }, 333);
    }

    return (
        <>
            <div className="mt-5 mb-4">
                Dashboard
                <br />
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => doLogout()}
                >
                    {'Log Out'}
                </button>
            </div>
        </>
    )
}
export default Dashboard;
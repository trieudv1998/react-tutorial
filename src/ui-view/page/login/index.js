import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserInfoToStore } from "../../../helper";

const LoginScreen = () => {
    const navigate = useNavigate()

    const doLogin = () => {
        saveUserInfoToStore({ loggedIn: true })
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 333);
    }

    return (
        <button
            className="btn btn-sm btn-primary"
            onClick={() => doLogin()}
        >
            {'Log In'}
        </button>
    )
}
export default LoginScreen;
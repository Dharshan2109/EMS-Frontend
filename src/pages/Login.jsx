import {useState} from "react";
import {useNavigate}
        from "react-router-dom";

import AuthService
        from "../services/AuthService";

import {useAuth}
        from "../context/AuthContext";

import "../styles/login.css";

function Login() {

    const navigate =
        useNavigate();

    const {login} =
        useAuth();

    const [username,
            setUsername] =
            useState("");

    const [password,
            setPassword] =
            useState("");

    const [error,
            setError] =
            useState("");

    const handleLogin =
        async(e)=>{

        e.preventDefault();

        try{

            const token =
                await AuthService
                    .login(
                        username,
                        password
                    );

            login(token);

            navigate("/");

        }
        catch(err){

    console.log(err);

    if(err.response){

        console.log(
            err.response
        );

        setError(
            err.response.data
        );
    }
    else{

        setError(
            err.message
        );
    }
}
    };

    return (

        <div className="login-page">

            <div className="login-card">

                <h2>
                    Enterprise EMS
                </h2>

                <p>
                    Sign in to continue
                </p>

                {error &&
                    <div
                        className=
                        "alert alert-danger"
                    >
                        {error}
                    </div>
                }

                <form
                    onSubmit={
                        handleLogin
                    }
                >

                    <input
                        className=
                        "form-control mb-3"

                        placeholder=
                        "Username"

                        value=
                        {username}

                        onChange=
                        {(e)=>
                            setUsername(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="password"

                        className=
                        "form-control mb-3"

                        placeholder=
                        "Password"

                        value=
                        {password}

                        onChange=
                        {(e)=>
                            setPassword(
                                e.target.value
                            )
                        }
                    />

                    <button
                        className=
                        "btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;
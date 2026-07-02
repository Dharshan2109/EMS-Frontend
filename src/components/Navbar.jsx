import {useAuth}
        from "../context/AuthContext";

function Navbar() {

    const {logout} =
        useAuth();

    return (

        <div
            className=
            "navbar-custom"
        >

            <h4>
                Enterprise EMS
            </h4>

            <button
                className=
                "btn btn-danger"

                onClick={
                    logout
                }
            >
                Logout
            </button>

        </div>
    );
}

export default Navbar;
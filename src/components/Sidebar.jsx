import { Link } from "react-router-dom";

import {
    FaHome,
    FaUsers,
    FaBuilding,
    FaChartBar,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

    return (

        <div className="sidebar">

            <h3 className="logo">
                EMS
            </h3>

            <ul>

                <Link
                    to="/"
                    style={{
                        textDecoration:"none",
                        color:"inherit"
                    }}
                >
                    <li>
                        <FaHome/>
                        Dashboard
                    </li>
                </Link>

                <Link
    to="/departments"
    style={{
        textDecoration:
        "none",
        color:"inherit"
    }}
>

 <Link
    to="/departments"
    style={{
        textDecoration:"none",
        color:"inherit"
    }}
>
    <li>

        <FaBuilding/>

        <span>
            Departments
        </span>

    </li>
</Link>

</Link>

                <Link
                    to="/employees"
                    style={{
                        textDecoration:"none",
                        color:"inherit"
                    }}
                >
                    <li>
                        <FaUsers/>
                        Employees
                    </li>
                </Link>

               
                  <Link
                    to="/reports"
                    style={{
                        textDecoration: "none",
                        color: "inherit"
                    }}
                >
                    <li>

                        <FaChartBar />

                        <span>
                            Reports
                        </span>

                    </li>
                </Link>


                        <Link
                    to="/login"
                    style={{
                        textDecoration: "none",
                        color: "inherit"
                    }}
                >
                    <li>

                        <FaSignOutAlt />

                        <span>
                            Logout
                        </span>

                    </li>
                </Link>

            </ul>

        </div>
    );
}

export default Sidebar;
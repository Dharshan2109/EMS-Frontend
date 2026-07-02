import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

import DepartmentChart from "../components/DepartmentChart";
import GenderChart from "../components/GenderChart";
import HiringTrendChart from "../components/HiringTrendChart";

import "../styles/dashboard.css";

import Clock from "../components/Clock";

function Dashboard() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {

            const res =
                await EmployeeService.getAll();

            setEmployees(res.data);

        } catch (err) {
            console.log(err);
        }
    };

    const activeEmployees =
        employees.filter(
            e => e.status === "ACTIVE"
        ).length;

    const departments =
        new Set(
            employees.map(
                e => e.department
            )
        ).size;

    const newHires =
        employees.filter(e => {

            if (!e.joiningDate)
                return false;

            const joinDate =
                new Date(e.joiningDate);

            return (
                joinDate.getFullYear() ===
                new Date().getFullYear()
            );

        }).length;

    return (

        

        <div>

            <h2 className="mb-4">
                Employee Dashboard
            </h2>

           


            <div className="mb-3">         

    <button
        className=
        "btn btn-success"

        onClick={
            ()=>window.print()
        }
    >

        Print Dashboard

    </button>

</div>




            {/* CARDS */}

            <div className="cards">

                <div className="card-box">

                    <h5>
                        Total Employees
                    </h5>

                    <h2>
                        {employees.length}
                    </h2>

                </div>

                <div className="card-box">

                    <h5>
                        Active Employees
                    </h5>

                    <h2>
                        {activeEmployees}
                    </h2>

                </div>

                <div className="card-box">

                    <h5>
                        Departments
                    </h5>

                    <h2>
                        {departments}
                    </h2>

                </div>

                <div className="card-box">

                    <h5>
                        New Hires
                    </h5>

                    <h2>
                        {newHires}
                    </h2>

                </div>



            </div>

  

            

            <div
    className=
    "card-box"
>

    <h3>
        Attendance
    </h3>

    <h1>
        92%
    </h1>

</div>

            {/* CHARTS */}

            <div className="charts">

                <DepartmentChart
                    employees={employees}
                />

                <GenderChart
                    employees={employees}
                />

                <HiringTrendChart
                    employees={employees}
                />

            </div>

        </div>
    );
}

export default Dashboard;
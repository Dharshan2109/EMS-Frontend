import {
    Pie
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
}
from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function DepartmentChart({
    employees
}) {

    const counts = {};

    employees.forEach(emp => {

        counts[
            emp.department
        ] =
            (counts[
                emp.department
            ] || 0) + 1;
    });

    const data = {

        labels:
            Object.keys(
                counts
            ),

        datasets: [
            {
                data:
                    Object.values(
                        counts
                    ),

                backgroundColor: [

                    "#2563eb",
                    "#14b8a6",
                    "#f59e0b",
                    "#ef4444",
                    "#8b5cf6"
                ]
            }
        ]
    };

    return (

        <div
            className=
            "chart-card"
        >

            <h5>
                Employees By Department
            </h5>

            <Pie
                data={data}
            />

        </div>
    );
}

export default DepartmentChart;
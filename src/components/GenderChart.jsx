import {
    Doughnut
}
from "react-chartjs-2";

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

function GenderChart({
    employees
}) {

    const male =
        employees.filter(
            e =>
            e.gender ===
            "Male"
        ).length;

    const female =
        employees.filter(
            e =>
            e.gender ===
            "Female"
        ).length;

    const data = {

        labels: [

            "Male",
            "Female"
        ],

        datasets: [
            {

                data: [
                    male,
                    female
                ],

                backgroundColor: [

                    "#2563eb",
                    "#ec4899"
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
                Male/Female Ratio
            </h5>

            <Doughnut
                data={data}
            />

        </div>
    );
}

export default GenderChart;
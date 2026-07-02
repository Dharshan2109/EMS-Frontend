import {
    Line
}
from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
}
from "chart.js";

ChartJS.register(

    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

function HiringTrendChart({

    employees

}) {

    const months = {};

    employees.forEach(emp => {

        const month =
            new Date(
                emp.joiningDate
            )

            .toLocaleString(
                "default",
                {
                    month:
                        "short"
                }
            );

        months[month] =
            (months[
                month
            ] || 0) + 1;
    });

    const data = {

        labels:
            Object.keys(
                months
            ),

        datasets: [
            {

                label:
                    "Hiring",

                data:
                    Object.values(
                        months
                    ),

                borderColor:
                    "#2563eb",

                fill:
                    false
            }
        ]
    };

    return (

        <div
            className=
            "chart-card"
        >

            <h5>
                Monthly Hiring Trend
            </h5>

            <Line
                data={data}
            />

        </div>
    );
}

export default HiringTrendChart;
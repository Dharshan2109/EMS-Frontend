function EmployeeStatistics({

    employees

}){

    const total =
        employees.length;

    const active =
        employees.filter(
            e=>
            e.status===
            "ACTIVE"
        ).length;

    const inactive =
        employees.filter(
            e=>
            e.status===
            "INACTIVE"
        ).length;

    const departments =
        new Set(

            employees.map(
                e=>
                e.department
            )

        ).size;

    return(

        <div
            className=
            "stats"
        >

            <div
                className=
                "stat-card"
            >

                <h3>
                    {total}
                </h3>

                <p>
                    Employees
                </p>

            </div>

            <div
                className=
                "stat-card"
            >

                <h3>
                    {active}
                </h3>

                <p>
                    Active
                </p>

            </div>

            <div
                className=
                "stat-card"
            >

                <h3>
                    {inactive}
                </h3>

                <p>
                    Inactive
                </p>

            </div>

            <div
                className=
                "stat-card"
            >

                <h3>
                    {departments}
                </h3>

                <p>
                    Departments
                </p>

            </div>

        </div>
    );
}

export default
EmployeeStatistics;
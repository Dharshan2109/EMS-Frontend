import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    FaTrash,
    FaSearch,
    FaEdit,
    FaEye
} from "react-icons/fa";

import EmployeeService
    from "../services/EmployeeService";

import Spinner
    from "../components/Spinner";

import ConfirmModal
    from "../components/ConfirmModal";

import EmployeeStatistics
    from "./EmployeeStatistics";

import {
    exportCSV
}
from "../utils/exportCSV";

import { toast }
from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "../styles/employee.css";

import { exportPDF }
from "../utils/exportPDF";

function EmployeeList() {

    const [employees,
        setEmployees] =
        useState([]);

    const [loading,
        setLoading] =
        useState(true);

    const [keyword,
        setKeyword] =
        useState("");

    const [department,
        setDepartment] =
        useState("");

    const [show,
        setShow] =
        useState(false);

    const [deleteId,
        setDeleteId] =
        useState(null);

    useEffect(() => {

        loadEmployees();

    }, []);

    const [
    currentPage,
    setCurrentPage
] = useState(1);

const recordsPerPage = 5;

    const loadEmployees =
        async () => {

            try {

                const res =
                    await EmployeeService
                        .getAll();

                setEmployees(
                    res.data
                );

            }
            catch (err) {

                console.log(err);

                toast.error(
                    "Unable to load employees"
                );
            }

            setLoading(false);
        };

    const search =
        async () => {

            if (keyword === "") {

                loadEmployees();

                return;
            }

            try {

                const res =
                    await EmployeeService
                        .search(
                            keyword
                        );

                setEmployees(
                    res.data
                );

            }
            catch {

                toast.error(
                    "Search Failed"
                );
            }
        };

    const filter =
        async () => {

            if (
                department === "" ||
                department === "Select"
            ) {

                loadEmployees();

                return;
            }

            try {

                const res =
                    await EmployeeService
                        .department(
                            department
                        );

                setEmployees(
                    res.data
                );

            }
            catch {

                toast.error(
                    "Filter Failed"
                );
            }
        };

        const last =
    currentPage *
    recordsPerPage;

const first =
    last -
    recordsPerPage;

const records =
    employees.slice(
        first,
        last
    );

const pages =
    Math.ceil(
        employees.length/
        recordsPerPage
    );

    const sortSalary=()=>{

    const data =
        [...employees];

    data.sort(
        (a,b)=>
        b.salary-
        a.salary
    );

    setEmployees(
        data
    );
};

    const remove =
        async (id) => {

            try {

                await EmployeeService
                    .deleteEmployee(
                        id
                    );

                toast.success(
                    "Employee Deleted"
                );

                loadEmployees();

            }
            catch {

                toast.error(
                    "Delete Failed"
                );
            }

            setShow(false);
        };

    if (loading)
        return <Spinner />;

    return (

        <div className="employee-page">

            {/* HEADER */}

            <div
                className="d-flex justify-content-between align-items-center mb-4"
            >

                <h2>
                    Employee Management
                </h2>

                <button
    className=
    "btn btn-warning"

    onClick={
        sortSalary
    }
>

    Sort Salary

</button>

                <div>

                    <button
                        className=
                        "btn btn-success me-2"

                        onClick={() =>
                            exportCSV(
                                employees
                            )
                        }
                    >
                        Export CSV
                    </button>

                    <button

    className=
    "btn btn-danger me-2"

    onClick={()=>
        exportPDF(
            employees
        )
    }
>

    Export PDF

</button>

                    <Link
                        to="/add"
                    >

                        <button
                            className=
                            "btn btn-primary"
                        >
                            Add Employee
                        </button>

                    </Link>

                </div>

            </div>

            {/* STATISTICS */}

            <EmployeeStatistics
                employees={
                    employees
                }
            />

            <br />

            {/* SEARCH */}

            <div
                className=
                "toolbar"
            >

                <input
                    className="form-control"

                    placeholder=
                    "Search Employee"

                    value={
                        keyword
                    }

                    onChange={
                        (e) =>
                            setKeyword(
                                e.target
                                    .value
                            )
                    }
                />

                <button
                    className= "btn btn-primary"

                    onClick={
                        search
                    }
                >

                    <FaSearch />

                </button>

                <select
                    className= "form-select"

                    value={
                        department
                    }

                    onChange={
                        (e) =>
                            setDepartment(
                                e.target
                                    .value
                            )
                    }
                >

                    <option>
                        Select
                    </option>

                    <option>
                        IT
                    </option>

                    <option>
                        HR
                    </option>

                    <option>
                        Sales
                    </option>

                    <option>
                        Finance
                    </option>

                </select>

                <button
                    className= "btn btn-success"

                    onClick={
                        filter
                    }
                >
                    Filter
                </button>

                <button
                    className= "btn btn-secondary"

                    onClick={
                        loadEmployees
                    }
                >
                    Reset
                </button>

            </div>

            {/* TABLE */}

            <table
                className="table
                table-hover
                table-bordered"
            >

                <thead
                    className=
                    "table-dark"
                >

                <tr>

                    <th>ID</th>

                    <th>Code</th>

                    <th>Name</th>

                    <th>Email</th>

                    <th>Department</th>

                    <th>Designation</th>

                    <th>Salary</th>

                    <th>Status</th>

                    <th>Action</th>

                </tr>

                </thead>

                <tbody>

                {
                    employees.length > 0 ?

                        records.map(
                            emp => (

                                <tr
                                    key={
                                        emp.id
                                    }
                                >

                                    <td>
                                        {emp.id}
                                    </td>

                                    <td>
                                        {
                                            emp.employeeCode
                                        }
                                    </td>

                                    <td>
                                        {
                                            emp.firstName
                                        }{" "}
                                        {
                                            emp.lastName
                                        }
                                    </td>

                                    <td>
                                        {
                                            emp.email
                                        }
                                    </td>

                                    <td>
                                        {
                                            emp.department
                                        }
                                    </td>

                                    <td>
                                        {
                                            emp.designation
                                        }
                                    </td>

                                    <td>
                                        ₹
                                        {
                                            emp.salary
                                        }
                                    </td>

                                    <td>

                                        <span
                                            className={
                                                emp.status ===
                                                "ACTIVE"

                                                    ?

                                                    "badge bg-success"

                                                    :

                                                    "badge bg-danger"
                                            }
                                        >

                                            {
                                                emp.status
                                            }

                                        </span>

                                    </td>

                                    <td>

                                        {/* VIEW */}

                                        <Link
                                            to={`/profile/${emp.id}`}
                                        >

                                            <button
                                                className=
                                                "btn btn-info me-2"
                                            >

                                                <FaEye/>

                                            </button>

                                        </Link>

                                        {/* EDIT */}

                                        <Link
                                            to={`/edit/${emp.id}`}
                                        >

                                            <button
                                                className=
                                                "btn btn-warning me-2"
                                            >

                                                <FaEdit/>

                                            </button>

                                        </Link>

                                        {/* DELETE */}

                                        <button
                                            className=
                                            "btn btn-danger"

                                            onClick={() => {

                                                setDeleteId(
                                                    emp.id
                                                );

                                                setShow(
                                                    true
                                                );
                                            }}
                                        >

                                            <FaTrash/>

                                        </button>

                                    </td>

                                </tr>

                            )
                        )

                        :

                        <tr>

                            <td
                                colSpan="9"
                                className=
                                "text-center"
                            >

                                No Employees Found

                            </td>

                        </tr>
                }

                </tbody>

            </table>

<div className="mt-3">

{
    [...Array(pages)]
        .map((_,i)=>

        <button
            key={i}

            className=
            "btn btn-primary me-2"

            onClick={()=>
                setCurrentPage(
                    i+1
                )
            }
        >
            {i+1}
        </button>
    )
}

</div>

            {/* DELETE POPUP */}

            <ConfirmModal

                show={
                    show
                }

                onClose={() =>
                    setShow(
                        false
                    )
                }

                onConfirm={() =>
                    remove(
                        deleteId
                    )
                }

            />

        </div>

    
    );
}

export default EmployeeList;
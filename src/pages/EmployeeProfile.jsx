import {
    useEffect,
    useState,
    useRef
}
from "react";

import {
    useParams
}
from "react-router-dom";

import EmployeeService
from "../services/EmployeeService";

import {
    useReactToPrint
}
from "react-to-print";

import "../styles/profile.css";

function EmployeeProfile(){

    const {id}
        = useParams();

    const [employee,
            setEmployee]
        = useState({});

    const printRef =
        useRef();

    useEffect(()=>{

        load();

    },[]);

    const load =
        async()=>{

        const res =
            await EmployeeService
                .getById(id);

        setEmployee(
            res.data
        );
    };

    const handlePrint =
        useReactToPrint({

            content:
                ()=>printRef
                    .current
        });

    return(

        <div>

            <button
                className=
                "btn btn-primary mb-3"

                onClick=
                {handlePrint}
            >

                Print Employee

            </button>

            <div
                ref={printRef}

                className=
                "profile-card"
            >

                <center>

                    <img

                        className=
                        "profile-avatar"

                        src=
                        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    />

                    <h2>

                        {
                            employee
                                .firstName
                        }

                        {" "}

                        {
                            employee
                                .lastName
                        }

                    </h2>

                    <p>

                        {
                            employee
                                .designation
                        }

                    </p>

                </center>

                <hr/>

                <table
                    className=
                    "table"
                >

                    <tbody>

                    <tr>

                        <th>
                            Employee Code
                        </th>

                        <td>
                        {
                            employee
                            .employeeCode
                        }
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Email
                        </th>

                        <td>
                        {
                            employee
                            .email
                        }
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Phone
                        </th>

                        <td>
                        {
                            employee
                            .phone
                        }
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Department
                        </th>

                        <td>
                        {
                            employee
                            .department
                        }
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Salary
                        </th>

                        <td>
                            ₹
                        {
                            employee
                            .salary
                        }
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Status
                        </th>

                        <td>
                        {
                            employee
                            .status
                        }
                        </td>

                    </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default EmployeeProfile;
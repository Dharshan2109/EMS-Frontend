import {
    useEffect,
    useState
}
from "react";

import {
    useParams,
    useNavigate
}
from "react-router-dom";

import EmployeeService
from "../services/EmployeeService";

import {
    toast
}
from "react-toastify";

import "../styles/employeeForm.css";

function EditEmployee(){

    const {id}
        = useParams();

    const navigate =
        useNavigate();

    const [employee,
            setEmployee]
        = useState({});

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

    const change =
        (e)=>{

        setEmployee({

            ...employee,

            [e.target.name]:
                e.target.value
        });
    };

    const update =
        async(e)=>{

        e.preventDefault();

        await EmployeeService
            .update(
                id,
                employee
            );

        toast.success(
            "Updated"
        );

        navigate(
            "/employees"
        );
    };

    return(

        <div
            className=
            "employee-form"
        >

            <h2>
                Edit Employee
            </h2>

            <form
                onSubmit={
                    update
                }
            >

                <div
                    className=
                    "form-grid"
                >

                    <input
                        name=
                        "firstName"

                        value=
                        {
                            employee
                            .firstName
                            ||""
                        }

                        className=
                        "form-control"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "lastName"

                        value=
                        {
                            employee
                            .lastName
                            ||""
                        }

                        className=
                        "form-control"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "email"

                        value=
                        {
                            employee
                            .email
                            ||""
                        }

                        className=
                        "form-control"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "department"

                        value=
                        {
                            employee
                            .department
                            ||""
                        }

                        className=
                        "form-control"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "designation"

                        value=
                        {
                            employee
                            .designation
                            ||""
                        }

                        className=
                        "form-control"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "salary"

                        value=
                        {
                            employee
                            .salary
                            ||""
                        }

                        className=
                        "form-control"

                        onChange=
                        {change}
                    />

                </div>

                <br/>

                <button
                    className=
                    "btn btn-success"
                >

                    Update

                </button>

            </form>

        </div>
    );
}

export default EditEmployee;
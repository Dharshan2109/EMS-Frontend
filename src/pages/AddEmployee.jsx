import {useState}
from "react";

import EmployeeService
from "../services/EmployeeService";

import {
    toast
}
from "react-toastify";

import "../styles/employeeForm.css";

function AddEmployee(){

    const [employee,
            setEmployee]
        = useState({

        employeeCode:"",
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        gender:"",
        dob:"",
        department:"",
        designation:"",
        salary:"",
        joiningDate:"",
        status:"ACTIVE"
    });

    const [avatar,
            setAvatar]
        = useState(
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        );

    const change =
        (e)=>{

        setEmployee({

            ...employee,

            [e.target.name]:
                e.target.value
        });
    };

    const submit =
        async(e)=>{

        e.preventDefault();

        if(
            employee.firstName===""){
            toast.error(
                "First Name Required"
            );
            return;
        }

        if(
            employee.email===""){
            toast.error(
                "Email Required"
            );
            return;
        }

        try{

            await EmployeeService
                .save(
                    employee
                );

            toast.success(
                "Employee Added"
            );

        }catch(err){

            toast.error(
                "Error"
            );
        }
    };

    return(

        <div
            className=
            "employee-form"
        >

            <h2>
                Add Employee
            </h2>

            <center>

                <img
                    src={avatar}
                    className=
                    "avatar"
                />

                <input
                    type="file"

                    className=
                    "form-control"

                    onChange=
                    {(e)=>{

                        if(
                            e.target
                                .files[0]
                        ){

                            setAvatar(

                                URL.createObjectURL(

                                    e.target
                                     .files[0]
                                )
                            );
                        }
                    }}
                />

            </center>

            <form
                onSubmit={
                    submit
                }
            >

                <div
                    className=
                    "form-grid"
                >

                    <input
                        name=
                        "employeeCode"

                        className=
                        "form-control"

                        placeholder=
                        "Employee Code"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "firstName"

                        className=
                        "form-control"

                        placeholder=
                        "First Name"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "lastName"

                        className=
                        "form-control"

                        placeholder=
                        "Last Name"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "email"

                        className=
                        "form-control"

                        placeholder=
                        "Email"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "phone"

                        className=
                        "form-control"

                        placeholder=
                        "Phone"

                        onChange=
                        {change}
                    />

                    <select
                        name=
                        "gender"

                        className=
                        "form-select"

                        onChange=
                        {change}
                    >

                        <option>
                            Gender
                        </option>

                        <option>
                            Male
                        </option>

                        <option>
                            Female
                        </option>

                    </select>

                    <input
                        type="date"

                        name="dob"

                        className=
                        "form-control"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "department"

                        className=
                        "form-control"

                        placeholder=
                        "Department"

                        onChange=
                        {change}
                    />

                    <input
                        name=
                        "designation"

                        className=
                        "form-control"

                        placeholder=
                        "Designation"

                        onChange=
                        {change}
                    />

                    <input
                        type="number"

                        name=
                        "salary"

                        className=
                        "form-control"

                        placeholder=
                        "Salary"

                        onChange=
                        {change}
                    />

                    <input
                        type="date"

                        name=
                        "joiningDate"

                        className=
                        "form-control"

                        onChange=
                        {change}
                    />

                    <select
                        name=
                        "status"

                        className=
                        "form-select"

                        onChange=
                        {change}
                    >

                        <option>
                            ACTIVE
                        </option>

                        <option>
                            INACTIVE
                        </option>

                    </select>

                </div>

                <br/>

                <button
                    className=
                    "btn btn-primary"
                >

                    Save Employee

                </button>

            </form>

        </div>
    );
}

export default AddEmployee;
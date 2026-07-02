import {
    useEffect,
    useState
} from "react";

import DepartmentService
from "../services/DepartmentService";

function DepartmentList(){

    const [
        departments,
        setDepartments
    ] = useState([]);

    useEffect(()=>{

        load();

    },[]);

    const load = async()=>{

        try{

            const res =
                await DepartmentService
                    .getAll();

            setDepartments(
                res.data
            );

        }catch(err){

            console.log(err);
        }
    };

    return(

        <div className="container-fluid">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3>
                        Department Management
                    </h3>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table
                            className=
                            "table table-hover table-bordered"
                        >

                            <thead
                                className=
                                "table-dark"
                            >

                                <tr>

                                    <th>ID</th>

                                    <th>
                                        Department Name
                                    </th>

                                    <th>
                                        Description
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                            {
                                departments.length===0 ?

                                <tr>

                                    <td
                                        colSpan="3"
                                        className=
                                        "text-center"
                                    >

                                        No Departments Found

                                    </td>

                                </tr>

                                :

                                departments.map(
                                    dept=>(

                                    <tr
                                        key={dept.id}
                                    >

                                        <td>
                                            {dept.id}
                                        </td>

                                        <td>
                                            {
                                                dept.departmentName
                                            }
                                        </td>

                                        <td>
                                            {
                                                dept.description
                                            }
                                        </td>

                                    </tr>
                                ))
                            }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DepartmentList;
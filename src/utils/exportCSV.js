export const exportCSV =
    (employees)=>{

    let csv =

`ID,Code,FirstName,LastName,Email,Department,Designation,Salary,Status\n`;

    employees.forEach(emp=>{

        csv +=

`${emp.id},
${emp.employeeCode},
${emp.firstName},
${emp.lastName},
${emp.email},
${emp.department},
${emp.designation},
${emp.salary},
${emp.status}\n`;

    });

    const blob =
        new Blob(
            [csv],
            {
                type:
                "text/csv"
            }
        );

    const url =
        window.URL
              .createObjectURL(
                  blob
              );

    const a =
        document
            .createElement(
                "a"
            );

    a.href = url;

    a.download =
        "employees.csv";

    a.click();
};
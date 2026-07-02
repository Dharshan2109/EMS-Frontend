import jsPDF from "jspdf";

export const exportPDF = (employees) => {

    const pdf = new jsPDF();

    pdf.setFontSize(18);

    pdf.text(
        "Employee Report",
        20,
        20
    );

    pdf.setFontSize(12);

    let y = 40;

    employees.forEach((emp,index)=>{

        pdf.text(

            `${index+1}. ${
                emp.firstName
            } ${
                emp.lastName
            } - ${
                emp.department
            } - ${
                emp.salary
            }`,

            20,

            y
        );

        y += 10;

        if(y > 270){

            pdf.addPage();

            y = 20;
        }
    });

    pdf.save(
        "employees.pdf"
    );
};
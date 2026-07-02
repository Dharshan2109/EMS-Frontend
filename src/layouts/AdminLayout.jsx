import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/dashboard.css";

function AdminLayout({children}) {

    return (

        <div className="main-container">

            <Sidebar/>

            <div className="content">

                <Navbar/>

                <div className="page">

                    {children}

                </div>

                <Footer/>

            </div>

        </div>
    );
}

export default AdminLayout;

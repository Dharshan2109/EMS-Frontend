import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Dashboard
        from "./pages/Dashboard";

import Login
        from "./pages/Login";

import AdminLayout
        from "./layouts/AdminLayout";

import ProtectedRoute
        from "./components/ProtectedRoute";

import {
    AuthProvider
} from "./context/AuthContext";

import EmployeeList
from "./pages/EmployeeList";

import AddEmployee
from "./pages/AddEmployee";

import EditEmployee
from "./pages/EditEmployee";

import EmployeeProfile
from "./pages/EmployeeProfile";


import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";

import DepartmentList
from "./pages/DepartmentList";

function App() {

    return (

        <AuthProvider>

            <BrowserRouter>

                <Routes>

                    <Route
                        path="/login"
                        element={<Login/>}
                    />

                    <Route
                        path="/"
                        element={

                            <ProtectedRoute>

                                <AdminLayout>

                                    <Dashboard/>

                                </AdminLayout>

                            </ProtectedRoute>
                        }
                    />

                    <Route
                    path="/employees"
                    element={
                     <ProtectedRoute>
                      <AdminLayout>
                     <EmployeeList/>
                     </AdminLayout>
                     </ProtectedRoute>
                     }
                    />

                    <Route
    path="/add"
    element={
        <ProtectedRoute>
            <AdminLayout>
                <AddEmployee/>
            </AdminLayout>
        </ProtectedRoute>
    }
/>

<Route
    path="/edit/:id"
    element={
        <ProtectedRoute>
            <AdminLayout>
                <EditEmployee/>
            </AdminLayout>
        </ProtectedRoute>
    }
/>

                <Route

    path="/profile/:id"

    element={

        <ProtectedRoute>

            <AdminLayout>

                <EmployeeProfile/>

            </AdminLayout>

        </ProtectedRoute>
    }
/>

        <Route
    path="/reports"
    element={
        <AdminLayout>
            <Reports/>
        </AdminLayout>
    }
/>

<Route
    path="/analytics"
    element={
        <AdminLayout>
            <Analytics/>
        </AdminLayout>
    }
/>

        <Route
    path="/departments"
    element={
        <DepartmentList/>
    }
/>

                </Routes>

            </BrowserRouter>

        </AuthProvider>
    );
}

export default App;
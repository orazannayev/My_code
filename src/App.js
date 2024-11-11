import Login from "./Components/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EmployeesList from "./Components/EmployeesList";
import { AuthProvider, useAuth } from "./Components/AuthContext"; // Import the context and hook

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Separate LoginPage component
const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/employees" />; // Redirect to Employees page if authenticated
  }

  return <Login />;
};

// Separate EmployeesPage component
const EmployeesPage = () => {
  const { isAuthenticated, accessToken } = useAuth();

  // Check if the user is authenticated and has an access token
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <EmployeesList accessToken={accessToken} />;
};

export default App;

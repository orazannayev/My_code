import React, { useEffect, useState } from "react";
import axios from "axios";
import DocumentForm from "./DocumentForm";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch employees function
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://192.168.4.72/api/employees/", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Log the entire response to check its structure
        console.log("Response data:", response.data);

        // Access the 'results' property to get the list of employees
        if (Array.isArray(response.data.results)) {
          setEmployees(response.data.results); // Set the results to employees state
        } else {
          setError("Alnan maglumatlar dogry däl.");
        }

        setLoading(false);
      } catch (err) {
        console.error("Maglumatlary almakda problema döredi:", err);
        setError("Maglumatlary almakda problema döredi.");
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []); // No need for token in dependencies as it's fetched inside the effect

  if (loading) return <p className="text-center">Maglumatlar ýüklenýär...</p>;
  if (error)
    return <p className="text-center text-red-500 font-bold mt-5">{error}</p>;

  return (
    <div>
      <DocumentForm />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center justify-center">
          Işçiler sanawy
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:bg-gray-50 transition"
            >
              {employee.avatar && (
                <img
                  src={employee.avatar}
                  alt={`${employee.first_name} ${employee.last_name}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
              )}
              <h2 className="text-lg font-semibold text-center">
                {employee.first_name} {employee.last_name}
              </h2>
              <p className="text-sm text-gray-500 text-center">
                {employee.position}
              </p>
              <p className="text-sm text-gray-700 text-center mt-2">
                {employee.email}
              </p>
              <p className="text-sm text-gray-500 text-center">
                Telefon: {employee.phone_number}
              </p>
              <p className="text-xs text-gray-400 text-center">
                Işe alnan: {employee.hire_date}
              </p>
              {employee.resign_date && (
                <p className="text-xs text-red-400 text-center">
                  Işden çykan: {employee.resign_date}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeesList;

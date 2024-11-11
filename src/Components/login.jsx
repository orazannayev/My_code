import React, { useState } from "react";
import { useAuth } from "./AuthContext.jsx"; // Import the useAuth hook

function Login() {
  const { login, loading, isAuthenticated } = useAuth(); // Use context values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const success = await login(username, password); // Call the login function from context

    if (!success) {
      setError("Giriş şowsuz boldy, parolyňyzy ýa-da adyňyzy barlaň.");
    }
  };

  if (isAuthenticated) {
    // Optionally, you can redirect or show a message that the user is logged in
    return <div>Giriş udaşykly tamamlandy!</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-wide">
          Poctanyza girin
        </h2>
        {error && (
          <p className="text-red-500 text-center">{error}</p> // Display error message
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <label className="block text-lg font-medium text-gray-700">
            Ulanyjynyn ady
          </label>
          <input
            className="w-full p-4 mt-2 text-lg bg-gray-100 border-2 border-gray-300 rounded-xl  transition-all"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="block text-lg font-medium text-gray-700">
            Passwordynyzy girizin
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 mt-2 text-lg bg-gray-100 border-2 border-gray-300 rounded-xl  transition-all"
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Yüklenýär..." : "Login"}{" "}
            {/* Button text based on loading state */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

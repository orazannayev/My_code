import React from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const gotToDocumentForm = () => {
    navigate("/document-form");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-wide">
          Ppoctanyza giriň
        </h2>
        <form className="space-y-6" action="/login" method="POST">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Ulanyjy ady ýa-da e-poçta
            </label>
            <input
              type="text"
              placeholder="Adynyzy ya-da e-mail yazyn"
              className="w-full p-4 mt-2 text-lg bg-gray-100 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Parol
            </label>
            <input
              type="password"
              placeholder="Passwordynyzy yazyn"
              className="w-full p-4 mt-2 text-lg bg-gray-100 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-teal-500"
                />
                <span className="ml-2">Meni yatda sakla</span>
              </label>
            </div>
            <a href="#" className="hover:text-teal-500">
              Paroly yatdan cykardynyzmy?
            </a>
          </div>
          <button
            onClick={gotToDocumentForm}
            className="w-full py-3 font-semibold text-white bg-teal-500 rounded-xl hover:bg-teal-600 transition-all focus:outline-none focus:ring-4 focus:ring-teal-500"
          >
            Girmek
          </button>
          <div className="text-center text-sm text-gray-500">
            <span>Poctanyz ýokmy? | </span>
            <a href="#" className="text-teal-500 hover:underline">
              Akkaundy doretmek
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

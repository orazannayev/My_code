import React, { useState } from "react";

function DocumentForm({ addDocument }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [type, setType] = useState("passport");
  const [titlef,tutle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ title, dueDate, type,titlef });
    setTitle("");
    setDueDate("");
    setType("passport");
    tutle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mb-6"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Taze dokumentleri gosmak
      </h3>
      <input
        type="text"
        placeholder="Ady"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-3 rounded-lg w-full mb-3 focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-3 rounded-lg w-full mb-3 focus:outline-none focus:border-blue-500"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:border-blue-500"
      >
        <option value="passport">Pasport</option>
        <option value="contract">Trudovoy</option>
        <option value="health_certificate">Saglyk sahadatnama</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 transition duration-300"
      >
        Dokumenti Gosmak
      </button>
    </form>
  );
}

export default DocumentForm;

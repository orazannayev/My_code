import React from "react";
import DocumentStatus from "./DocumentStatus";

function DocumentList({ documents }) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Dokumentlerin sanawy
      </h2>
      <ul>
        {documents.map((doc, index) => (
          <li
            key={index}
            className="flex justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition duration-200"
          >
            <div className="font-medium text-gray-700">
              <strong>{doc.title}</strong> — {doc.type}
              <strong>{doc.titlef}</strong> — {doc.type}
            </div>
            <DocumentStatus dueDate={doc.dueDate} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentList;

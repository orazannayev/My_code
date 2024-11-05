import React from "react";
import DocumentStatus from "./DocumentStatus";

function DocumentList({ documents }) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Dokumentlerin sanawy
      </h2>
      <ul>
        {documents.map(
          // //bu props arkaly geçirilýän dokumentleriň sanawydyr.
          (
            doc, //her bir dokumentiň maglumatlaryny öz içine alýar (meselem, title, type, titlef we dueDate).
            index //her bir dokumentiň sanawdaky indeksini görkezýär we bu key hökmünde ulanylýar.
          ) => (
            <li
              key={index} //Her bir elemente aýratynlyk bermek üçin key attributy ulanylýar.
              className="flex justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition duration-200"
            >
              <div className="font-medium text-gray-700">
                <strong>{doc.title}</strong> — {doc.type}
                <strong>{doc.titlef}</strong> — {doc.type}
              </div>
              <DocumentStatus dueDate={doc.dueDate} />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default DocumentList;

import React from "react";

function ReportPage({ documents }) {
  const overdueDocuments = documents.filter(
    (doc) => new Date(doc.dueDate) > new Date() //şertini ýerine ýetiren dokumentler "wagty geçen" dokumentler hökmünde saýlanýar.
  );

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Wagty gecen dokumentler
      </h2>
      <ul>
        {overdueDocuments.map((doc, index) => (
          <li
            key={index} //bu, React üçin her bir elementiň özboluşlylygyny üpjün edýär.
            className="p-3 border-b border-gray-100 text-gray-700 hover:bg-red-50 transition duration-200"
          >
            {doc.title} — {doc.dueDate}
          </li> //Her bir dokumentiň  möhlet senesi görkezilýär.
        ))}
      </ul>
    </div>
  );
}

export default ReportPage;

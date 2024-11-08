import React, { useState } from "react";
import DocumentForm from "./Components/DocumentForm";
import DocumentList from "./Components/DocumentList";
import ReportPage from "./Components/ReportPage";
import Header from "./Components/Header";
import Example from "./Components/example";

function App() {
  const [documents, setDocuments] = useState([]);

  const addDocument = (document) => {
    setDocuments([...documents, document]);
  };

  return (
    <div className="container mx-auto p-6">
      <Header />
      <DocumentForm addDocument={addDocument} />
      <DocumentList documents={documents} />
      <ReportPage documents={documents} />
      <Example />
    </div>
  );
}

export default App;

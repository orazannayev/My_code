import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./login";
import DocumentForm from "./DocumentForm";

function ChangePage() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/document-form" element={<DocumentForm  />} />
        </Routes>
      </BrowserRouter>
    );
}

export default ChangePage
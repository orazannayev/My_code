import React from "react";

function DocumentStatus({ dueDate }) {
  const isOverdue = new Date(dueDate) < new Date();

  return (
    <span
      className={`text-sm ${
        isOverdue ? "text-red-500" : "text-green-500"
      } font-semibold transition duration-300`}
    >
      {isOverdue ? "Wagty gecen" : "Aktiw"}
    </span>
  );
}

export default DocumentStatus;

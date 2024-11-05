import React from "react";

function DocumentStatus({ dueDate }) {
  //bu React komponentidir, onuň bir prop-gy (parametr) bolan dueDate bar
  const isOverdue = new Date(dueDate) > new Date(); //Bu setir, dueDate (möhlet senesi) bilen häzirki wagty deňeşdirýär.

  //Eger dueDate häzirki wagty geçip gitse, isOverdue true bolýar, ýöne başga ýagdaýda false bolýar.
  //Ýani, eger dokumentiň möhletiniň geçen wagty bolsa bu isOverdue true diýip kesgitlenýär.
  return (
    <span
      className={`text-sm ${
        isOverdue ? "text-red-500" : "text-green-500"
      } font-semibold transition duration-400`}
    >
      {isOverdue ? "Wagty gecen" : "Aktiw"}
    </span>
  );
}
//Eger isOverdue true bolsa, "Wagty gecen" diýen ýazgy görkezilýär.
//Eger false bolsa, "Aktiw"  diýen ýazgy görkezilýär.

export default DocumentStatus;

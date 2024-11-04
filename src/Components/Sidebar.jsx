import React from "react";

import {
  FcDataRecovery,
  FcAcceptDatabase,
  FcDeleteDatabase,
} from "react-icons/fc";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex-col justify-between ">
        <div className="flex flex-col items-center">
        <div 
            href="/DocumentForm"
            className="bg-blue-800 text-white p-3 rounded-lg inline-block"
          >
            <FcDataRecovery
              size={20}
              className="cursor-pointer"
              href="./Components/DocumentList"
              
            />
          </div>
          <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
          <div
            href="/DocumentList"
            className="bg-blue-100  cursor-pointer my-4 text-white p-3 rounded-lg inline-block hover:bg-gray-200"
          >
            <FcAcceptDatabase size={20} className="cursor-pointer" href="/" />
          </div>
          <div className="bg-blue-100  cursor-pointer my-4 text-white p-3 rounded-lg inline-block hover:bg-gray-200">
            <FcDeleteDatabase size={20} className="cursor-pointer" href="/" />
          </div>
          <div className="bg-blue-100  cursor-pointer my-4 text-white p-3 rounded-lg inline-block hover:bg-gray-200">
            <FcDataRecovery size={20} className="cursor-pointer" href="/" />
          </div>
          <div className="bg-blue-100  cursor-pointer my-4 text-white p-3 rounded-lg inline-block hover:bg-gray-200">
            <FcDataRecovery size={20} className="cursor-pointer" href="/" />
          </div>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;

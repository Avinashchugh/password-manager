import React from "react";

const Manager = () => {
  return (
    <>
      <div className="mycontainer mx-auto">
        <div className="logo font-bold text-2xl text-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </div>
        <p className="text-green-700 text-center text-bold">
          Your own password manager
        </p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
            />
            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-center">
             <button className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-3 py-2">
                <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"/>
          Add password
        </button>
        </div>
       
      </div>
    </>
  );
};

export default Manager;

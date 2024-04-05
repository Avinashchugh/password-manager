import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
  };

  const showPassword = () => {
    const passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mycontainer mx-auto">
        <div className="logo font-bold text-2xl text-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </div>
        <p className="text-green-700 text-center font-bold">
          Your own password manager
        </p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-1 mb-4"
            type="text"
            value={form.site}
            placeholder="Enter your website"
            onChange={handleChange}
            name="site"
          />
          <div className="flex gap-8 w-full">
            <input
              className="rounded-full border border-green-500 flex-1 p-4 py-1"
              type="text"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              name="username"
            />
            <div className="relative flex-1">
              <input
                id="passwordInput"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                name="password"
              />
              <span
                className="absolute right-[6px] top-[9px] cursor-pointer"
                onClick={showPassword}
              >
                <FaRegEye />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-3">
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-3 py-2 gap-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            />
            Add password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4 text-center">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && (
            <div className="text-center">No password to show</div>
          )}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="text-center">Website</th>
                  <th className="text-center">Username</th>
                  <th className="text-center">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{item.site}</td>
                      <td className="text-center">{item.username}</td>
                      <td className="text-center">{item.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

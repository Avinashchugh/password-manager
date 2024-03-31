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
    console.log(form);
    setPasswordArray([...passwordArray, form]);
    localStorage.getItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };
  const showPassword = () => {
    alert("Show the password");
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
        <p className="text-green-700 text-center text-bold">
          Your own password manager
        </p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            value={form.site}
            placeholder="Enter your website"
            onChange={handleChange}
            name="site"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              name="username"
            />
            <div className="relative">
                <input
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="text"
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
        <div className="flex justify-center">
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-3 py-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            />
            Add password
          </button>
        </div>
        <div className="passwords">
          <h2>Your Passwords</h2>
          <table class="table-auto w-full ">
            <thead className=" bg-green-800 text-white">
              <tr>
                <th className="text-center">Song</th>
                <th className="text-center">Artist</th>
                <th className="text-center">Year</th>
              </tr>
            </thead>
            <tbody className="bg-green-100 ">
              <tr>
                <td className="text-center w-32">The Sliding Mr. Bones</td>
                <td className="text-center w-32">Malcolm Lockyer</td>
                <td className="text-center w-32">1961</td>
              </tr>
              <tr>
                <td className="text-center w-32">Witchy Woman</td>
                <td className="text-center w-32">The Eagles</td>
                <td className="text-center w-32">1972</td>
              </tr>
              <tr>
                <td className="text-center w-32">Shining Star</td>
                <td className="text-center w-32">Earth, Wind, and Fire</td>
                <td className="text-center w-32">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manager;

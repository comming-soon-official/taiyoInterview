import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../redux/slices";
import { useNavigate } from "react-router-dom";

const Createcontacts = () => {
  const [radio, setRadio] = useState("active");
  const [input, setinput] = useState({ fname: "", lname: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //updating Firstname state
  const handleFName = (e) => {
    setinput((prev) => {
      const tempVal = { ...prev };
      tempVal.fname = e.target.value;
      return tempVal;
    });
  };

  //updating Firstname state

  const handleLName = (e) => {
    setinput((prev) => {
      const tempVal = { ...prev };
      tempVal.lname = e.target.value;
      return tempVal;
    });
  };

  //updating status state
  const handleCheck = (e) => {
    console.log(e.target.value);
    setRadio(e.target.value);
  };

  //sending to redux using dispatch method
  const handleSave = () => {
    if (input.fname !== "" && input.lname !== "") {
      dispatch(
        addContacts({
          fname: input.fname,
          lname: input.lname,
          radio: radio,
        })
      );
      //navigating to home after updated redux state
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="mt-5 mb-5 text-xl font-bold text-center">
            Create Contacts
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="fname"
            >
              First Name
            </label>
            <input
              value={input.fname}
              onChange={handleFName}
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lname"
            >
              Last Name
            </label>
            <input
              value={input.lname}
              onChange={handleLName}
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Status</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  onChange={handleCheck}
                  value="active"
                  type="radio"
                  checked={radio === "active"}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">active</span>
              </label>
            </div>

            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  onChange={handleCheck}
                  value="inactive"
                  type="radio"
                  checked={radio === "inactive"}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Inactive</span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createcontacts;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../redux/slices";

const Homecontacts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fetching contacts from redux and storing in allContacts
  const allContacts = useSelector((state) => state.contacts.contacts);

  //navigating to create route
  const handleCreate = () => {
    navigate("/create");
  };

  const handleEdit = (id, fname, lname, radio) => {
    // passing edatable data via navigate function to another update component its similr to redux
    navigate("/update", {
      state: { id: id, fname: fname, lname: lname, radio: radio },
    });
  };

  return (
    <div className="flex justify-center mt-24 ">
      <div className="flex flex-col justify-center w-96 h-fit bg-blue-300 rounded-2xl">
        <h1 className="mt-5 self-center text-xl font-bold">
          Create contact screen
        </h1>
        <div className="p-5">
          <div className="flex items-center justify-evenly ">
            <button
              onClick={handleCreate}
              className="my-5 mr-7 p-2 bg-gray-400"
            >
              Create Contacts
            </button>
          </div>
          {/* applying conditional rendering to show datas or alert based on length  */}
          {allContacts.length === 0 ? (
            <div className="flex justify-center">
              <div className=" w-fit bg-red-100 p-5 rounded-md text-center">
                No Contacts found Please add contact from Create Contact Button
              </div>
            </div>
          ) : (
            //mapping all contacts and showing in stacks
            allContacts.map((contact, index) => {
              return (
                <div
                  key={index}
                  className="p-3 bg-gray-100 my-2 flex justify-between items-center rounded-md"
                >
                  <div>
                    <h3 className="text-sm">First Name : {contact.fname}</h3>
                    <p className="text-sm">Last Name : {contact.lname}</p>
                    <p className="text-sm">Status : {contact.radio}</p>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        handleEdit(
                          contact.id,
                          contact.fname,
                          contact.lname,
                          contact.radio
                        )
                      }
                      className="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded"
                    >
                      Edit
                    </button>

                    <button
                      //using dispatch to delete specific contact from redux state
                      onClick={() =>
                        dispatch(deleteContact({ id: contact.id }))
                      }
                      className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-3 rounded ml-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Homecontacts;

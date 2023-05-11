import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  //adding in array of objects because in future maybe we could add extra objects for navigation
  const data = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Graphs",
      link: "/report",
    },
  ];

  return (
    <div className="bg-blue-300 h-full text-black py-5">
      <ul className="w-full flex justify-evenly ">
        {/* mapping array of objects to populate navbar */}
        {data.map((items, i) => (
          <li
            key={i}
            onClick={() => navigate(items.link)}
            className="cursor-pointer hover:text-white text-xl font-medium"
          >
            {items.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

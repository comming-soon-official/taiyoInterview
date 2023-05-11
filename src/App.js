import React from "react";
import Createcontacts from "./components/Createcontacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homecontacts from "./components/Homecontacts";
import Updatecontacts from "./components/Updatecontacts";
import Navbar from "./components/Navbar";

import Covid from "./components/Covid";

const App = () => {
  // this page contains only navbar and routings
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homecontacts />} />
          <Route path="/create" element={<Createcontacts />} />
          <Route path="/update" element={<Updatecontacts />} />
          <Route path="/report" element={<Covid />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

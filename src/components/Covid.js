import React from "react";
import CovidMap from "./CovidMap";
import CovidGraph from "./CovidGraph";

const Covid = () => {
  return (
    <div className="flex flex-col justify-center">
      <CovidMap />
      <CovidGraph />
    </div>
  );
};

export default Covid;

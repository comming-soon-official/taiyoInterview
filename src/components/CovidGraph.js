import React, { useState, useEffect } from "react";
import Plotly from 'react-plotly.js';


const CovidGraph = () => {
  const [data, setData] = useState([]);

  //fetching values from api and updating to state
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  //filtering api values and keys and storing in a constant variable also using conditional rendering to avoid errors
  const casesvalues = data.cases ? Object.values(data.cases) : null;
  const deathsvalues = data.deaths ? Object.values(data.deaths) : null;
  const recoveredvalues = data.recovered ? Object.values(data.recovered) : null;
  const caseskeys = data.cases ? Object.keys(data.cases) : null;
  const deathskeys = data.deaths ? Object.keys(data.deaths) : null;
  const recoveredkeys = data.recovered ? Object.keys(data.recovered) : null;

  //adding keys and values to the x and y axis to populate graph
  const layout = {
    title: "COVID-19 Cases",
    xaxis: {
      title: "Date",
      showgrid: false,
      zeroline: false,
    },
    yaxis: {
      title: "Number of cases",
      showline: false,
    },
  };

  const config = {
    displayModeBar: false,
  };

  //trace1 contains total Affected Cases
  const trace1 = {
    x: caseskeys,
    y: casesvalues,
    mode: "lines",
    type: "scatter",
    name: "Cases",
    line: {
      color: "red",
      width: 2,
    },
  };

  //trace2 contains total Death Cases
  const trace2 = {
    x: deathskeys,
    y: deathsvalues,
    mode: "lines",
    type: "scatter",
    name: "Recovered",
    line: {
      color: "green",
      width: 2,
    },
  };

  //trace3 contains total Recovered Cases
  const trace3 = {
    x: recoveredkeys,
    y: recoveredvalues,
    mode: "lines",
    type: "scatter",
    name: "Deaths",
    line: {
      color: "black",
      width: 2,
    },
  };

  return (
    <div className="flex justify-center">
      {/* adding conditional rendering to avoid development error */}
      {data ? (
        <Plotly
          data={[trace1, trace2, trace3]}
          layout={layout}
          config={config}
          className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12"
        />
      ) : null}
    </div>
  );
};

export default CovidGraph;

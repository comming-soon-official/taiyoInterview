import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

//assiging icons properly otherwise broken image will show
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function CovidMap() {
  const [data, setData] = useState([]);

  //fetching apiu data and updating to data state
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex justify-center">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "50vh", width: "90%" }} //custom styling is important to add
        className="sm:h-96" //adding class for responsiveness
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* mapping all countries  */}
        {data.map((country, i) => (
          <Marker
            key={i}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Active cases: {country.active}</p>
                <p>Recovered cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default CovidMap;

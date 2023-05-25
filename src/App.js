/** @format */
import "./App.css";
import Search from "./components/Search";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import { isIP } from "is-ip";
import Error from "./components/Error";

function App() {
  const [ipAddress, setIpAddress] = useState(null);
  const [lat, setLat] = useState("51.505");
  const [long, setLong] = useState("-0.09");
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(ipAddress);
    const getIP = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setIpAddress(data.ip);
    };
    getIP("https://api.ipify.org?format=json");
  }, []);

  useEffect(() => {
    const getInfo = async (url) => {
      const res = await fetch(url);
      if (res.status === 422 || res.status === 400) {
        setError("Ooops! Something went wrong");
        return;
      }
      const data = await res.json();
      setIpData(data);
      setLat(data.location.lat);
      setLong(data.location.lng);
      setError(null);
    };

    if (ipAddress) {
      isIP(ipAddress)
        ? getInfo(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_MY_KEY}&ipAddress=${ipAddress}`
          )
        : getInfo(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_MY_KEY}&domain=${ipAddress}`
          );
    }
  }, [ipAddress]);

  return (
    <div className="App">
      <div className="top-part mx-auto">
        <Search setIpAddress={setIpAddress} />
      </div>
      {!error && <Details ipData={ipData} />}
      {error && <Error error={error} />}
      <Map lat={lat} long={long} />
    </div>
  );
}

export default App;

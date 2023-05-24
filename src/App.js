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
      console.log(data);
    };
    getIP("https://api.ipify.org?format=json");
  }, []);

  useEffect(() => {
    const getInfo = async (url) => {
      const res = await fetch(url);
      console.log(res.status);
      if (res.status === 422 || res.status === 400) {
        setError("Ooops! Something went wrong");
        console.log("omo");
        return;
      }
      const data = await res.json();
      setIpData(data);
      setLat(data.location.lat);
      setLong(data.location.lng);
      console.log(data);
      setError(null);
    };
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

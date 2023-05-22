/** @format */
import "./App.css";
import Search from "./components/Search";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map";
import { useEffect, useState } from "react";

function App() {
  const [ipAddress, setIpAddress] = useState(null);
  const [lat, setLat] = useState("51.505");
  const [long, setLong] = useState("-0.09");
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    const getInfo = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setIpData(data);
      setLat(data.location.lat);
      setLong(data.location.lng);
      console.log(data);
      setLoading(false);
    };

    // ipAddress && getInfo(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_MY_KEY}&ipAddress=${ipAddress}`);
    const jj = {
      ip: "210.76.207.126",
      location: {
        country: "CN",
        region: "Beijing Shi",
        city: "Wangfujing",
        lat: 39.90807,
        lng: 116.4115,
        postalCode: "",
        timezone: "+08:00",
        geonameId: 10175057,
      },
      as: {
        asn: 7497,
        name: "CSTNET-AS-AP",
        route: "210.76.206.0/23",
        domain: "",
        type: "",
      },
      isp: "Computer Network Information Center",
    };
    console.log(jj.location.lat);
    setIpData(jj);
    setLat(jj.location.lat);
    setLong(jj.location.lng);
    console.log(ipAddress);
    setLoading(false);
  }, [ipAddress]);

  // const handleSubmit = async () => {
  //   const res = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_MY_KEY}&ipAddress=${ipAddress}`);
  //   const data = await res.json();
  // };

  return (
    <div className="App">
      <div className="top-part mx-auto">
        <Search setIpAddress={setIpAddress} />
      </div>
      <Details ipData={ipData} />
      {/* {!loading && <Map lat={lat} long={long} />} */}
      <Map lat={lat} long={long} />
    </div>
  );
}

export default App;

/** @format */
import "./App.css";
import Search from "./components/Search";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBX1r3XHpNYQElUIQXoHtIB_d2P-ibQLvs",
  });

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  const center = useMemo(() => {
    return { lat: 44, lng: -80 };
  }, []);

  return (
    <div className="App">
      <div
        style={{
          // maxWidth: "600px",
          paddingBottom: "150px",
        }}
        className="top-part mx-auto"
      >
        <Search />
      </div>
      <div className="bottom-part bg-danger position-relative h-100">
        {/* {isLoaded ? <Details /> : <p>Loading</p>} */}
        {isLoaded && (
          <GoogleMap
            zoom={10}
            center={{ lat: 44, lng: -80 }}
            mapContainerStyle={containerStyle}
          />
        )}
        {/* <Marker position={center} /> */}
        {/* <p>fff</p> */}
      </div>
    </div>
  );
}

export default App;

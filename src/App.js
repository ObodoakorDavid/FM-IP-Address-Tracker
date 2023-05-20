/** @format */
import "./App.css";
import Search from "./components/Search";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <div className="top-part mx-auto">
        <Search />
      </div>
      <Details />
      <Map />
    </div>
  );
}

export default App;

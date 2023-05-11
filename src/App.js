/** @format */
import "./App.css";
import Search from "./components/Search";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <Search />
        <Details />
      </div>
    </div>
  );
}

export default App;

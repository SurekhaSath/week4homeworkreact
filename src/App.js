import WeatherSearch from "./WeatherSerach";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Appcontainer">
        <h1>Weather App</h1>

        <WeatherSearch />
        <footer>
          <p>
            Coded by surekha and is{" "}
            <a
              href="https://github.com/SurekhaSath/week4homeworkreact"
              target="blank"
            >
              open sourced in git hub
            </a>
            and is hosted in{" "}
            <a
              href="https://app.netlify.com/teams/surekhasath/sites"
              target="blank"
            >
              netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

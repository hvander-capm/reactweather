import "./weather.css";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Wind from "./Wind";
import bootstrap from `bootstrap`;

export default function App() {
  return (
    <div className="App">
      <body class="weatherApp">
        <div class="container">
          <div class="row">
            <div class="col">
              <input
                type="City/State"
                id="inputLocation"
                class="form-control"
                aria-describedby="locationHelpBlock"
                placeholder="Enter City/State then select Search"
              />
              <br />
              <span class="btn" id="searchBtn">
                <input type="Submit" value="Search" />
              </span>
              <span class="btn" id="currentBtn">
                <input type="Submit" value="Current" />
              </span>
            </div>
            <div class="row currentDay">
              <div class="col currentIcon">
                <div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Weather"
                    id="icon"
                  />
                  <span class="temperature" id="temperature">
                    <Temperature />
                  </span>
                  <span>℉</span>
                </div>
              </div>
              <div class="col currentInfo">
                <div id="currentLocation">New York</div>
                Last Updated:
                <div id="currentTime">Sunday, 12:00pm</div>
              </div>
              <div class="col addtInfo">
                <div id="currentCondition">Clear, Sunny</div>
                <span id="wind">
                  <Wind />
                </span>
                <span id="humidity">
                  <Humidity />
                </span>
              </div>
              <div id="fiveDays"></div>
            </div>
          </div>
          <br />
          <a href="https://github.com/hvander-capm/my-weather-project">
            Open Source Code by Heather Vanderberg
          </a>
        </div>
      </body>
    </div>
  );
}

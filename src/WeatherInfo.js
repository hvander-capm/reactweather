import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={80} />
            </div>

            <div className="float-left">
              <WeatherTemperature
                fahrenheit={props.data.temperature}
                size={75}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <div>
              <FormattedDate date={props.data.date} />
            </div>
            <div className="text-capitalize">{props.data.description}</div>
            <div>Humidity: {props.data.humidity}%</div>
            <div>Wind: {props.data.wind} Mph</div>
          </ul>
        </div>
      </div>
    </div>
  );
}

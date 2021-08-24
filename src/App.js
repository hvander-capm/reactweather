import React from "react";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.heathervanderberg.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heather Vanderberg
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/hvander-capm/reactweather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://reverent-aryabhata-79320a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

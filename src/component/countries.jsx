import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log("add this to country visited");
    // console.log(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    // console.log("flag adding");
    // console.log(flags)
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3
        className="countries-head"
        style={{ color: "tomato", fontWeight: "bold" }}
      >
        Countries: {countries.length}
      </h3>
      {/* visited country */}
      <div>
        <h5>Visited countries: {visitedCountries?.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country?.cca3}>{country?.name?.common}</li>
          ))}
        </ul>
      </div>
      <div className="flags-container">
          {
            visitedFlags.map((flag,idx) => <img key={idx} src={flag?.flags?.png}></img>)
          }
      </div>

      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country?.ccn2}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

// 40_4 running

import { useState } from "react";
import "./country.css";
import CountryDetails from "../countryDetails/countryDetails";
const Country = ({ country, handleVisitedCountries,handleVisitedFlags}) => {
//   console.log(country);
//   console.log(handleVisitedCountries)
// console.log(handleVisitedFlags)

  const { name, flags, population, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  const passWithProps = ()=> handleVisitedCountries(country)
  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{color: visited ? 'tomato' : 'white'}}>Name: {name?.common}</h3>
      <div>
        <img src={flags?.png} alt="" />
      </div>
      <h5>Capital: {country?.capital}</h5>
      <h6>Population: {population}</h6>
      <h6>Code: {cca3}</h6>
      <button style={{backgroundColor: handleVisitedCountries ? 'blue' : 'acqa'}} onClick={passWithProps}>Mark Visited</button>
      <br />
      <br />
      <button style={{backgroundColor: handleVisitedFlags ? 'steelblue' : 'tomato'}} onClick={() => handleVisitedFlags(country)}>Add visited flags</button>
      <br />
      <br />
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Going"}
      </button>
      <br />
      {/* {Visited && 'i have visited'} */}
      {visited ? "i have visited" : "I want to visit"}
      <hr />
      <CountryDetails 
        key = {country.cca3}
        country= {country}
        handleVisitedCountries = {handleVisitedCountries}
        handleVisitedFlags  = {handleVisitedFlags}
      ></CountryDetails>
    </div>
  );
};

export default Country;

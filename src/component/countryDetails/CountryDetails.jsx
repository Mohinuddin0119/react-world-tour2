import CountryData from "../countryData/countryData";
const CountryDetails = (props) => {
    const {country, handleVisitedCountries,handleVisitedFlags} = props;
    return (
        <div>
            <h3>Country details</h3>
            <hr />
            {/* <CountryData
            country = {country}
            handleVisitedCountries = {handleVisitedCountries}
            handleVisitedFlags = {handleVisitedFlags}
            >
            </CountryData> */}
                {/* another way */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;
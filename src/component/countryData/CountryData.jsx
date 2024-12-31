
const CountryData = ({country, handleVisitedCountries,handleVisitedFlags}) => {
    console.log(handleVisitedCountries)
    console.log(handleVisitedFlags)
    return (
        <div>
            <h6>Country data: {country.name.common}</h6>
        </div>
    );
};

export default CountryData;
import './country.css'
const Country = ({country}) => {
    console.log(country)
    const {name,flags} = country
    return (
        <div className='country'>
            <h3>Name: {name?.
common}</h3>
        <h5>Capital: {country?.capital}</h5>
        <h6>Population: {country?.
population}</h6>
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default Country;
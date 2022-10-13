import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const CountryInfo = ({ data, width, detailed }) => {
    
    width = (data.area/17098242)*100 + "%";
    return (
      <div className = "Info">
      <p><b>{data.name.common}</b> {data.area}km<sup>2</sup></p>  
      {detailed && (
            <p>Capital: {data.capital}<br></br>Region: {data.region}</p>
      )} 
      <Link to={"/country/" + data.cca3}>Details</Link>
      <div className = "bar" style = {{width : width}}>
      </div>  
      </div>
    );
  };

  export default CountryInfo;
import countries from "world-countries";
import "./App.css";
import CountryInfo from "./CountryInfo.js";
import React, { useState } from "react";
import DetailedPage from "./DetailedPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const CountryList = ({ data }) => {
  const [text, setText] = useState("");

  data.sort((a, b) => b.area - a.area);
  const result = data.filter((data) => data.name.common !== "Antarctica");

  const matchSearch = (word) => {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseSearchString = text.toLowerCase();

    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  };
  const filteredCountries = result.filter((country) =>
    matchSearch(country.name.common)
  );

  function changeInput(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>Search Country</h1>
      <input type="text" placeholder="Type here..." onChange={changeInput} />
      {filteredCountries.map((Country, i) => (
        <CountryInfo key={Country.cca3} data={Country} detailed={i < 5} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Back to List</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/country/:id" children={<DetailedPage />} />
            <Route path="/CountryDetails/">
              <CountryDetails />
            </Route>
            <Route path="/">
              <CountriesListed />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function CountryDetails() {
  return <div>Hello World</div>;
}

function CountriesListed() {
  return <CountryList data={countries} />;
}

export default App;

import React from "react";
// import { getCurrentWeather } from "./../apis/open-weather.api";
import "./search-bar.scss";

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onInputChange(e) {
    this.props.inputChange(e);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.formSubmitted();
  }

  render() {
    const location = this.props.location;

    return (
      <div className="search-bar">
        <form
          className="search-bar__form"
          onSubmit={(e) => this.onFormSubmit(e)}
        >
          <button className="search-bar__button" type="submit">
            City Name
          </button>
          <input
            id="search"
            name="search"
            value={location}
            className="search-bar__input"
            onChange={(e) => this.onInputChange(e)}
          ></input>
        </form>
      </div>
    );
  }
}
export default SearchBar;

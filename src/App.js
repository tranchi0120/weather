// import logo from "./logo.svg";
import React from "react";
import "./App.scss";
import SearchBar from "./components/search-bar";
import CurrentWeather from "./components/current-weather";
import { getCurrentWeather, getForecast } from "./apis/open-weather.api";
import Forecast from "./components/forecast-weather";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Ho Chi Minh",
      temp: "",
      temp_min: "",
      temp_max: "",
      feelsLike: "",
      description: "",
      icon: "",
      hourlyForecast: [],
    };
  }

  componentDidMount() {
    this.onFormSubmit();
  }

  onInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  async onFormSubmit() {
    const weatherRes = await getCurrentWeather(this.state.location);
    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const forecastRes = await getForecast(lat, lon);

    this.setState({
      temp: weatherRes.data.main.temp,
      feelsLike: weatherRes.data.main.feels_like,
      description: weatherRes.data.weather[0].main,
      icon: weatherRes.data.weather[0].icon,
      hourlyForecast: forecastRes.data.hourly,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>WEATHER FOR THE DAY</p>
          <SearchBar
            location={this.state.location}
            inputChange={(e) => this.onInputChange(e)}
            formSubmitted={() => this.onFormSubmit()}
          />
          <CurrentWeather
            currentTemperature={this.state.temp}
            feelsLike={this.state.feelsLike}
            description={this.state.description}
            icon={this.state.icon}
          />
          <Forecast forecast={this.state.hourlyForecast} />
        </header>
      </div>
    );
  }
}

export default App;

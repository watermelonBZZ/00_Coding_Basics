import React from "react";
function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

class App extends React.Component {
  state = {
    location: "",
    isLoading: false,
    displayLocation: "",
    weather: {},
  };

  fetchWeather = async () => {
    if (this.state.location.length < 2) return this.setState({ weather: {} });
    try {
      // 在class方法里，不需要先复制整个state，只需要把需要修改的属性作为对象字面量（Object literals）传入
      this.setState({ isLoading: true });
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // child改parent state需要用函数传递，加上箭头函数不用bind
  handleChangeLocation = (e) => {
    this.setState({ location: e.target.value });
  };

  // useEffect[]
  componentDidMount() {
    this.setState({ location: localStorage.getItem("location") || "" });
    this.fetchWeather();
  }

  // 等同于useEffect[props,states]（initial奏效）,但这个在initial render时不奏效
  componentDidUpdate(pros, prevState) {
    if (this.state.location !== prevState.location) {
      this.fetchWeather();

      // 这里只会存一个value，因为不是列表，就是单次输入的地点
      localStorage.setItem("location", this.state.location);
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <Input
            location={this.state.location}
            onChangeLocation={this.handleChangeLocation}
          />
        </div>

        {this.state.isLoading === true && <p className="loader">Loading...</p>}

        {/* return 里面的logic 写法都一样，需要花括号 
        传入的props也需要写this.state*/}
        {this.state.weather.weathercode && (
          <Weather
            weather={this.state.weather}
            location={this.state.displayLocation}
          />
        )}
      </div>
    );
  }
}

export default App;

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Seatch from location..."
        value={this.props.location}
        // 这里没有bind，只有单独申明event handle function的时候需要
        onChange={this.props.onChangeLocation}
      />
    );
  }
}

class Weather extends React.Component {
  //
  componentWillUnmount() {
    console.log("weathe will unmount");
  }

  render() {
    //接受props只能单独写每一个prop的解构
    // 这里解构前面是传入的key名称，后面是定义的在这个class里面的变量名称
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    return (
      <div>
        <h2>Weather for {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              date={date}
              max={max.at(i)}
              min={min.at(i)}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const { date, max, min, code, isToday } = this.props;
    return (
      <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong> {Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}

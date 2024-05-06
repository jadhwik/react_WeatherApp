import { useState, useEffect } from "react";
import axios from "axios";
import Sun from "../assets/sunicon.png";
import search from "../assets/search.png";
import Day1 from "./Day1.jsx";
import Day2 from "./Day2.jsx";
import Day3 from "./Day3.jsx";
import { getDayName } from "./utils.jsx";
import { iconChange } from "./iconChange.jsx";
import TodayWeather from "./todayWeather.jsx";

const Component1 = () => {
  const [city, setCity] = useState("London");
  const [data, setData] = useState(null);

  const [temp, setTemp] = useState("");
  const [day, setDay] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState();
  const [dtText, setDt] = useState("");
  let apiKey = "2fd6c28bb601381ff38d8d61723253d0";

  const fetchData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=2fd6c28bb601381ff38d8d61723253d0`;
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(resJson);
    setData(resJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const timeEdit = (dtTxt) => {
    const time = dtTxt.split(" ")[1]; // Split the string by space and get the second part (time)
    return time; // Output: "12:00:00"
  };
  useEffect(() => {
    if (data && data.list.length > 0) {
      setTemp(data.list[0].main.temp);
      setDay(getDayName(data.list[0].dt_txt));
      setDesc(data.list[0].weather[0].main);
      setTime(timeEdit(data.list[0].dt_txt));
    }
  }, [data]);
  const currentTime = new Date();
  console.log(currentTime); // This will log the current date and time

  // To get the time in a specific format, you can use methods of the Date object
  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  let meridiem = "AM";

  // Convert hours to 12-hour format and determine AM/PM
  if (hours > 12) {
    hours -= 12;
    meridiem = "PM";
  } else if (hours === 0) {
    hours = 12;
  }

  console.log(`Current time: `);

  return (
    <div className="full">
      <div className="search">
        <input
          type="text"
          value={city}
          placeholder="enter city name"
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="searchButt" onClick={handleSubmit}>
          <img src={search}></img>
        </button>
      </div>

      <div className="Main">
        <div className="comp">
          <div className="sun">{iconChange(desc)}</div>
          <div className="sub">
            <h3>Today({day})</h3>
            <h1>{city}</h1>
            <p>{temp}°C</p>
            <p>{desc}</p>
            <p>
              {hours}:{minutes}
              {meridiem}(indian)
            </p>
          </div>
          <div className="components">
            <Day1 data={data}></Day1>
            <Day2 data={data}></Day2>
            <Day3 data={data}></Day3>
          </div>
        </div>
        <div>
          <TodayWeather
            data={data}
            timeEdit={timeEdit}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            iconChange={iconChange}
          ></TodayWeather>
        </div>
      </div>
    </div>
  );
};

export default Component1;

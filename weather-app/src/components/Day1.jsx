import { useState, useEffect } from "react";
import Sunny from "../assets/sunny.png";
import { getDayName } from "./utils.jsx";
import { iconChange } from "./iconChange.jsx";

const Day1 = ({ data }) => {
  const [temp, setTemp] = useState("");
  const [day, setDay] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    if (data && data.list.length > 0) {
      setTemp(data.list[4].main.temp);
      setDay(getDayName(data.list[7].dt_txt));
      setDesc(data.list[7].weather[0].main);
    }
  }, [data]);
  return (
    <div className="Day1">
      <p>{day}</p>
      <div>{iconChange(desc)}</div>
      <p>{desc}</p>
      <h3>{temp}°C</h3>
    </div>
  );
};
export default Day1;

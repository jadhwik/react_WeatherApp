import { useEffect, useState } from "react";
import clouds from "../assets/clouds.png";
import { getDayName } from "./utils";
import { iconChange } from "./iconChange";

const Day2 = ({ data }) => {
  const [temp, setTemp] = useState("");
  const [day, setDay] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    if (data && data.list.length > 0) {
      setTemp(data.list[16].main.temp);
      setDay(getDayName(data.list[16].dt_txt));
      setDesc(data.list[16].weather[0].main);
    }
  }, [data]);
  return (
    <div className="Day2">
      <p>{day}</p>
      <div>{iconChange(desc)}</div>
      <p>{desc}</p>
      <h3>{temp}°C</h3>
    </div>
  );
};
export default Day2;

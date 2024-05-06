import CloudySun from "../assets/cloudysun.png";
import { getDayName } from "./utils";
import { useEffect, useState } from "react";
import { iconChange } from "./iconChange";

const Day3 = ({ data }) => {
  const [temp, setTemp] = useState("");
  const [day, setDay] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    if (data && data.list.length > 0) {
      setTemp(data.list[20].main.temp);
      setDay(getDayName(data.list[20].dt_txt));
      setDesc(data.list[20].weather[0].main);
    }
  }, [data]);
  return (
    <div className="Day3">
      <p>{day}</p>
      <div>{iconChange(desc)}</div>
      <p>{desc}</p>
      <h3>{temp}°C</h3>
    </div>
  );
};
export default Day3;

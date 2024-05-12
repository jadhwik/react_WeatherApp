import { useEffect, useState } from "react";

import rain from "../assets/rain.png";

const todayWeather = ({
  data,
  timeEdit,
  hours,
  minutes,
  seconds,
  iconChange,
}) => {
  const [temp1, setTemp1] = useState("");
  const [temp2, setTemp2] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [temp3, setTemp3] = useState("");
  const [desc3, setDesc3] = useState("");
  const [temp4, setTemp4] = useState("");
  const [desc4, setDesc4] = useState("");
  const [temp5, setTemp5] = useState("");
  const [desc5, setDesc5] = useState("");
  const [cel1, setCel1] = useState("");
  const [cel2, setCel2] = useState("");
  const [cel3, setCel3] = useState("");
  const [cel4, setCel4] = useState("");
  const [cel5, setCel5] = useState("");

  const extractHourAndMinute12 = (timeString) => {
    const [hour, minute] = timeString.split(":");
    let formattedHour = parseInt(hour, 10);
    let meridiem = "AM";

    if (formattedHour >= 12) {
      // Adjusted condition
      meridiem = "PM";
      if (formattedHour > 12) {
        formattedHour -= 12;
      }
    } else if (formattedHour === 0) {
      formattedHour = 12;
    }

    return { hour: formattedHour, minute, meridiem };
  };

  useEffect(() => {
    if (data && data.list.length > 0) {
      const time = timeEdit(data.list[1].dt_txt);
      const formatted = extractHourAndMinute12(time);
      setTemp1(formatted);
      setDesc1(data.list[1].weather[0].main);
      setCel1(data.list[1].main.temp);

      const time2 = timeEdit(data.list[2].dt_txt);
      const formatted1 = extractHourAndMinute12(time2);
      setTemp2(formatted1);
      setDesc2(data.list[2].weather[0].main);
      setCel2(data.list[2].main.temp);

      const time3 = timeEdit(data.list[3].dt_txt);
      const formatted3 = extractHourAndMinute12(time3);
      setTemp3(formatted3);
      setDesc3(data.list[3].weather[0].main);
      setCel3(data.list[3].main.temp);

      const time4 = timeEdit(data.list[4].dt_txt);
      const formatted4 = extractHourAndMinute12(time4);
      setTemp4(formatted4);
      setDesc4(data.list[4].weather[0].main);
      setCel4(data.list[4].main.temp);

      const time5 = timeEdit(data.list[5].dt_txt);
      const formatted5 = extractHourAndMinute12(time5);
      setTemp5(formatted5);
      setDesc5(data.list[5].weather[0].main);
      setCel5(data.list[5].main.temp);
    }
  }, [data]);
  return (
    <div className="td1">
      <div>
        <div>{iconChange(desc1)}</div>
        <p>{cel1}°C</p>
        <p>{desc1}</p>
        <p>
          {temp1.hour}:{temp1.minute}
          {temp1.meridiem}
        </p>
      </div>
      <div>
        <div>{iconChange(desc2)}</div>
        <p>{cel2}°C</p>
        <p>{desc2}</p>
        <p>
          {temp2.hour}:{temp2.minute}
          {temp2.meridiem}
        </p>
      </div>
      <div>
        <div>{iconChange(desc3)}</div>
        <p>{cel3}°C</p>
        <p>{desc3}</p>
        <p>
          {temp3.hour}:{temp3.minute}
          {temp3.meridiem}
        </p>
      </div>
      <div>
        <div>{iconChange(desc4)}</div>
        <p>{cel4}°C</p>
        <p>{desc4}</p>
        <p>
          {temp4.hour}:{temp4.minute}
          {temp4.meridiem}
        </p>
      </div>
      <div>
        <div>{iconChange(desc5)}</div>
        <p>{cel5}°C</p>
        <p>{desc5}</p>
        <p>
          {temp5.hour}:{temp5.minute}
          {temp5.meridiem}
        </p>
      </div>
    </div>
  );
};
export default todayWeather;

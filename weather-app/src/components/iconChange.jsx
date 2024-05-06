import storm from "../assets/storm.png";
import cloudysun from "../assets/cloudysun.png";
import rainyday from "../assets/rainyday.png";
import clouds from "../assets/clouds.png";
import sun from "../assets/sunicon.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow2.png";

export const iconChange = (desc) => {
  if (desc == "moderate rain") {
    return <img src={rainyday}></img>;
  } else if (desc == "Clouds") {
    return <img src={clouds}></img>;
  } else if (desc == "Clear") {
    return <img src={sun}></img>;
  } else if (desc == "Rain") {
    return <img src={rain}></img>;
  } else if (desc == "Snow") {
    return <img src={snow}></img>;
  } else {
    return null;
  }
};

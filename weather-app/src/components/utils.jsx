// utils.js
export const getDayName = (dtTxt) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(dtTxt.replace(/-/g, "/")); // Replace '-' with '/' for compatibility
  const dayIndex = date.getDay();
  return days[dayIndex];
};

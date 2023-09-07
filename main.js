// To get the Current Day Of The Week
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = new Date();
let day = weekday[currentDay.getDay()];
document.getElementById("current-day").innerHTML = day;

// 
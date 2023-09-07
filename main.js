const currentDayAndTime = new Date();

// To get the Current Day Of The Week
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekday[currentDayAndTime.getDay()];
document.getElementById("current-day").innerHTML = day;

// To get the UTC Time in milliseconds
let time = currentDayAndTime.getUTCMilliseconds();
document.getElementById("current-time").innerHTML = time;

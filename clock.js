var getday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const clock = function() {
    const date = new Date();
    let month = date.getMonth();
    let d = date.getDate();
    let day = date.getDay();
    if (d < 10) d = "0" + d;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    let today = month+1 + "." + d + " " + getday[day];

    document.getElementById("date").innerHTML = today;
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
}
setInterval(clock, 1000);

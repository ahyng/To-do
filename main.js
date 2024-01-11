var getday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const clock = function() {
    const date = new Date();
    let month = date.getMonth();
    let d = date.getDate();
    let day = date.getDay();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let today = month+1 + "/" + d + "/" + getday[day];

    document.getElementById("clock").innerHTML = today + " " + hour + ":" + minute + ":" + second;
}
setInterval(clock, 1000);

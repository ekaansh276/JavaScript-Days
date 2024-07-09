let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
};

setInterval(() => {
    let date = new Date(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? (hour = 12) : hour;

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.querySelector(".hours").innerHTML = hour;
    document.querySelector(".mins").innerHTML = min;
    document.querySelector(".secs").innerHTML = sec;
    document.querySelector(".am-pm").innerHTML = d;
}, 1000);
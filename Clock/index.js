const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateColor() {
    const currentTime = new Date ();

    const hour = new Date ().getHours();
    console.log(hour);
    
    const minute = new Date ().getMinutes();
    console.log(minute);

    const second = new Date ().getSeconds();
    console.log(second);
    setInterval(updateColor, 1000);

    const hourDeg = (hour / 12)*360;
    hourEl.style.transform = ` rotate(${hourDeg}deg)`;

   const minuteDeg = (minute / 60)*360;
    minuteEl.style.transform = ` rotate(${minuteDeg}deg)`;

    const secondDeg = (second / 60)*360;
    secondEl.style.transform = ` rotate(${secondDeg}deg)`;
}
updateColor();
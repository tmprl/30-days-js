const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date(); 
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutes = now.getMinutes()
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hours = now.getHours()
    const hoursDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minutesDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    console.log(seconds)
}

setInterval(setDate, 1000);
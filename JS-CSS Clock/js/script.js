/*jshint esversion: 6 */
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = ()=>{
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    const minutesDegrees = ((minutes/60)* 360 + 90);
    const hoursDegrees =((hours/12)* 360 + 90);
    secondHand.style.transform =`rotate(${secondsDegrees}Deg)`;
    minuteHand.style.transform =`rotate(${minutesDegrees}Deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}Deg)`;
    console.log(secondsDegrees,minutesDegrees,hoursDegrees);
}

setInterval(setDate,1000);
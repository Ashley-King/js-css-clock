
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    //translate seconds to percentage of seconds in minute times degrees in circle to get degrees
    const secondsDegrees = ((seconds / 60) * 360) +90;//offset default of 90 deg
    
    //get rid of weird flash at 90deg due to transition:
    if(secondsDegrees === 90){
        secondHand.style.transition = 'none'
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const min = now.getMinutes();
    const minutesDegrees = ((min/60) * 360) + 90;
    //get rid of weird flash at 90deg due to transition:
    if(minutesDegrees === 90){
        minHand.style.transition = 'none'
    }
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour/12) * 360) + 90;
    //get rid of weird flash at 90deg due to transition:
    if(hourDegrees === 90){
        hourHand.style.transition = 'none'
    }
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    

}

setInterval(setDate, 1000);
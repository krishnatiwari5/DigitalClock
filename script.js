const currentHour = document.querySelector('.hours');
const currentMinute = document.querySelector('.minutes');
const currentSecond = document.querySelector('.seconds');
const currentMeridiem = document.querySelector('.meridiem');


function currentTime() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    if(hour > 12) {
        hour = hour - 12;
        
currentMeridiem.textContent = 'PM';
    }
    else{
currentHour.textContent = hour;
currentMeridiem.textContent = 'AM';
    }

    if(hour < 10) {
        currentHour.textContent = '0' + hour;
    }
    else {
        currentHour.textContent = hour;

    }

    
    if(minute < 10) {
        currentMinute.textContent = '0' + minute;
    }
    else {
        currentMinute.textContent = minute;

    }

    
    if(second < 10) {
        currentSecond.textContent = '0' + second;
    }
    else {
        currentSecond.textContent = second;

    }
}
setInterval(currentTime, 1000);

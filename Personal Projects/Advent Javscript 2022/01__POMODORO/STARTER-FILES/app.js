//variables
const text = document.querySelector('.start');


const minutesEl = document.getElementById("minutesInput"); //let vs const?


const secondsEl = document.getElementById("secondsInput"); //let vs const?

let interval;
let stop = false;
console.log(text.innerHTML);

// console.log(text.innerHTML);


//this will change the text of the HTML from start to stop, stop to start
text.addEventListener('click', function(){
    if(text.innerHTML === "start"){
        text.innerHTML = "stop";
    } else if(text.innerHTML === "stop") {
        text.innerHTML = "start";
    } 
    console.log(text.innerHTML);

    const minutes = parseInt(minutesEl.value);
    const seconds = parseInt(secondsEl.value);

    console.log(minutes,seconds);

    const totalSeconds = minutes * 60 + seconds

    startTimer(totalSeconds);

    })


const startTimer = (totalSeconds) => {
    interval = setInterval( () =>{
        totalSeconds--;
        updateInputs(totalSeconds);
    }, 1000)
}

//updates HTML input minutes and seconds value
const updateInputs = (totalSeconds) => {
    //define how minutes and seconds are calculated based on 
    //total amount of seconds inputted from user
    const minutes = Math.floor(totalSeconds/60);
    const seconds = totalSeconds%60;

    //if statement to handle use case when less than 10 seconds on timer
    //should show extra 0 in front of the second
    if (seconds < 10) {
        secondsEl.value = '0' + seconds;
        minutesEl.value = minutes;
    } else {
        minutesEl.value = minutes;
        secondsEl.value = seconds;
    }
}





//timerFunction will handle countdown and pausing
// const timerFunction = () => {
//     const totalMinutes = Math.floor(minutesInSeconds/60);
//     let totalSeconds = minutesInSeconds % 60;

//     totalSeconds = totalSeconds < 10 ? '0' + totalSeconds : totalSeconds;

//     let minutes = totalMinutes;
//     let seconds = totalSeconds;
//     //need to start timer and stop timer here
//     console.log('clicked!')

// }


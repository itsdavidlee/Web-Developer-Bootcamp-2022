// //Examples of accepting functions as arguments

// function callTwice(func){
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random()*6) +1
//     console.log(roll)
// }


// //example of returning a function
// function makeMystryFunc() {
//     const rand = Math.random();
//     if (rand >0.5) {
//         return function() {
//             console.log("Congrats, I am a good function!");
//             console.log("You win a million dollars!")

//         }
//     } else {
//         return function() {
//             alert("You have been infected by a virus!");
//             alert("Stop trying to close this window!");
//             alert("Stop trying to close this window!");
//             alert("Stop trying to close this window!");
//             alert("Stop trying to close this window!");

//         }
//     }
// }

// //make a function that tells you if a number is between 50 and 100
// function isBetween(num){
//     return num >=50 && num<=100;
// }

// //make a function that tells you if a number is between 1 and 10
// function isBetween2(num){
//     return num >=1 && num<=10;
// }

//make a function that will make a function for us:

function makeBetweenFunc(min,max){
    return function(num){
        return num>= min && num <=max;
    }
}
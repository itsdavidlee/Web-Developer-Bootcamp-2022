let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter the a valid maximum number!"));
}


const targetNum = Math.floor(Math.random() *maximum)+1;
console.log(targetNum);

let guess = prompt("Enter your first guess!");
if (guess === targetNum) {
    console.log("You got it! It took you 1 guess!")
} else {
    let attempts = 1;
 
    while (parseInt(guess) !== targetNum) {
        if(guess === "q") break;
        attempts++;
        if(guess > targetNum) {
            guess = prompt("Too high! Enter a new guess!");
        } else if (guess < targetNum) {
            guess = prompt("Too low! Enter a new guess!");
        } else ( guess = prompt("Please enter a valid number as your guess!"))
    }
    if (guess ===  "q") {
        console.log("You quit the game!")
    } else {
        console.log(`You got it! It took you ${attempts} guesses`);
    }
}
 
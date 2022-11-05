// function singSong() {
//     console.log("DO")
//     console.log("RE")
//     console.log("MI")
// }


// function greet(person) {
//     console.log(`Hi, ${person}!`);
// }


// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.!`);
// }

// function repeat(str, numTimes) {
//     let finalString = ''
//     for(let i=0; i < numTimes; i++) {
//         finalString = finalString + str;
//     }
//     console.log(finalString);
// }

// function add(x,y) {
//     let sum = x+y;
//     return sum;
//     //or just simplify into one line:
//     //return x+y
// }

function add(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x+y;
}

//AND OPERATOR
// const password = prompt("Enter your password");

// if(password.length>=6 && password.indexOf(' ') == -1) {
//     console.log("Valid Password!")
// } else {
//     console.log ("Incorrect format for password")
// }


//OR OPERATOR
//0-5 free
//5-10 $10
//10-65 $20
//65+ free

// const age = 90;
// if (age>=0 && age< 5 || age>=65) {
//     console.log("Free!");
// } else if (age>=5 && age< 10) {
//     console.log("$10")
// } else if (age>=10 && age<65) {
//     console.log("$20")
// } else {
//     console.log("Invalid Age!")
// }


//NOT OPERATOR

// const firstName = prompt("enter your first name")

// if(!firstName) {
//     firstName = prompt("Try again! Please enter your first name!")
// }

const age =10;
if (!(age >= 0 && age <5 || age >= 65)) {
    console.log("You are not a baby or a senior!");
}
// function collectEggs() {
//     let totalEggs=6;
//     console.log(totalEggs);
// }

// function collectEggs() {
//     let totalEggs=6;
// }
// console.log(totalEggs);
// //this will return totalEggs undefined because the totalEggs inside the function can only be accessed within the function, not outside.

// let bird = 'Scarlet Macaw';
// function birdWatch(){
//     let bird = 'Great Blue Heron';
// }
// birdWatch();
// console.log(bird);

//block scope
for (let i = 0; i<5; i++){
    var msg = "HI THERE";
    console.log(msg);
}
console.log(msg);
console.log(i)
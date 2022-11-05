// try {
//     hello.toUpperCase();
//     //this would lead to an error
// } catch {
//     console.log("Error!")
// }

// hello.toUpperCase();

// console.log('AFTER!');
// //this will not print as the line before will cause an Error and stop the whole script

function yell(msg){
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(e){
        console.log("Please pass a string only!");
    }
}
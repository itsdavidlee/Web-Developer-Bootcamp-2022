// const myMath = {
//     PI: 3.14159,
//     square: function(num){
//         return num*num;
//     },
//     cube: function(num){
//         return num**3;
//     }
// }

//Javascript has updated so that syntax of functions can be typed quickly

//square: function(num){
//     return num*num;
// }

//can be retyped as:
//square(num) {
//     return num*num;
// }


const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(`${this.name} says MEOW!`);
    } 
}

const meow2 = cat.meow;
//meow2() would only output " says MEOW!" as its not able
//to access this.name from cat.meow
//this would only be accessible within where it's stored(?)

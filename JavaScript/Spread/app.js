//For function calls

//Math.max(13,4,5,21,3,3,1,2,5000)
//5000

//Math.min(1,2,3)
//1

const nums = [13,3,4,5,21,3,3,1,2,7,6,2,5000]
//incorrect way: Math.max(nums) //NaN

Math.max(...nums) // 5000

//the above is the same as inputting:
//Math.max(13,3,4,5,21,3,3,1,2,7,6,2,5000)




//For Array Literals

const cats = ['Blue','Scout','Rocket']
const dogs = ['Rusty', 'Wyatt']

const allPets = [...cats, ...dogs]
//['Blue','Scout','Rocket','Rusty'.'Wyatt']
//spread allows you to take each item in the array and add into the new array




//For Object Literals
const feline = {legs: 4, family: 'Felidae' }
const canine = {family: 'Caninae', furry: true }

const dog = {...canine, isPet: true}
//{family: "Caninae", furry: true, isPet: true}

const lion = {...feline, genus: 'Panthera' }
//{legs: 4, family: 'Felidae', genus: "Panthera"}

const catDog = {...feline, ...canine }
//{legs: 4, family: 'Caninae', furry: true}

//there are technically two family key value pairs...
//canine family key value pair will overwrite feline's since it comes after



const array1 = [...'hello']
//['h', 'e', 'l', 'l', 'o']

const object1 = {...[1,2,3]}
//{ 0: 1, 1: 2, 2: 3}
//key will be index, value will be value of index in the array


const user = {
    email: 'harvey@gmail.com',
    password: 'password123',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first...',
    city: 'San Francisco',
    state: 'California'
};

//const firstName = user.firstName;
//const lastName = user.lastName;
// const email = user.email;
const {email, firstName, lastName, bio} = user;

const {born} = user;
//this would creat the variable born to be set to user.born value

//if you wanted to rename born to something else like "birthYear"...
const {born: birthYear} = user;

const user2 = {
    email: 'Stacy@gmail.com',
    password: 'password123',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
}
//if you wanted to add a new variable that's not a key in user2...

// const {firstName, lastName, died} = user2;
//died is not a key in user2, so the variable died will be created here... but value will be undefined

//we can set a value to the variable ourselves:
const{firstName, lastName, died = 'N/A'} = user2;
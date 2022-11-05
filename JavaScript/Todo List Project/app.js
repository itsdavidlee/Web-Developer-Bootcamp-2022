let input = prompt("What would you like to do?")
const toDoList = []


while (input !== "quit" && input !== 'q'){
   
    if (input === "new") {
        const toDoInput = prompt("Enter a new todo:");
        toDoList.push(toDoInput);
        console.log(`${toDoInput} added to the list!`)
    }
    else if (input === "list") {
        console.log('*****************');
        for (i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]} `);
        }
        console.log('*****************');
    }
    else if (input === 'delete') {
        const index = parseInt(prompt("Which index would you like to delete?"));
        if (!Number.isNaN(index)) {
            const deleted = toDoList.splice(parseInt(index),1);
            console.log(`Okay, you deleted ${deleted[0]}`); 
        } else {
            console.log('Unknown index')
        }
        // while (!index) {
        //     index = parseInt(prompt("Please enter a valid index!"));
        // }

        //want to delete using splice and index
    }
    input = prompt("What would you like to do?")
}
console.log("You quit!");



//was able to get all functions to work... but need to figure out how to get the first input of commands to register.
//first input returns the same prompt (goes into while loop prompt), so no action happens...
//also, need to figure out how to account for errors in entering which index to delete... 
    //when trying to use the while loop !index... 0 is considered false boolean, so it will continue to register "Please enter a valid index!" text.
//need to display commands on html page 
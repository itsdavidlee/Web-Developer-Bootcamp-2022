// const makeRandomColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
//     button.addEventListener('click', function(){
//         button.style.backgroundColor = makeRandomColor();
//         button.style.color = makeRandomColor();
//     })
// }

// const h1s = document.querySelectorAll('h1');
// for (let h1 of h1s) {
//     h1.addEventListener('click', function() {
//         h1.style.backgroundColor = makeRandomColor();
//         h1.style.color = makeRandomColor();
//     })
// }


//if we wanted to save time by creating a function that takes the type.style.backgroundColor = makeRandomColor();
//we can use this.style.... instead of h1.style and button.style

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}
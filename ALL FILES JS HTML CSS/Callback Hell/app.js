// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'purple';
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayColorChange = (newColor, delay, doNext) => {
    setTimeout(()=> {
        document.body.style.backgroundColor = newColor;
        doNext() && doNext();
    }, delay)
}

delayColorChange('red', 1000, () => {
    delayColorChange('orange', 1000, () => {
        delayColorChange('yellow', 1000, () => {
            delayColorChange('green', 1000, () => {
                delayColorChange('blue', 1000, () => {

                })
            })
        })
    })
});

//setTimeout does not work in forloop like the below
// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

// for(let color of rainbow){
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
// }, 1000);
// }
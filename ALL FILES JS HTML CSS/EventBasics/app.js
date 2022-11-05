const btn = document.querySelector('#v2')
btn.onclick = function(){
    console.log('You Clicked Me');
    console.log('I hope it worked!')
}

function scream(){
    console.log('AHHHHH');
    console.log('Stop Touching Me!');

}
btn.onmouseenter= scream;

document.querySelector('h1').onclick = function(){
    alert('you clicked the h1!')
}

//arrow function version
//document.querySelector('h1').onclick = () => {
//    alert('you clicked the h1!')
//}

//addEventListener

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('clicked!')
})

function twist() {
    console.log('Twist!')
}
function shout() {
    console.log('SHOUT!')
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;
//this would only execute shout function. .onclick listener only allows one callback function
//you can execute both (one after the other) by using addEventListener

tasButton.addEventListener('click',twist);
tasButton.addEventListener('click',shout)
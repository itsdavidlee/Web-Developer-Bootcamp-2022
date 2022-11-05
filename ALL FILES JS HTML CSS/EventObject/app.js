document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt)
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    console.log("KEYDOWN")
    console.log(e)
    console.log(e.key)
    console.log(e.code)
})
// input.addEventListener('keyup', function() {
//     console.log("KEYUP")
// })

//if you wanted to track keystrokes (and not into an input):
//window.addEventListener('keydown', function(e){
//     console.log(e);
//     console.log(e.key);
//     console.log(e.code);
// })
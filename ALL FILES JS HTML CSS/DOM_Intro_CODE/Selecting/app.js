// //how to grab all image sources and change them to be the same photo based on a specific image url

// const allImages = document.getElementsByTagName('img');

// for (let img of allImages){
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// //we can grab all elements by class as well:
// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages){
//     img.src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


//all in one selector - querySelector
//this only returns the FIRST match

// const links = document.querySelectorAll('p a');

// for (let link of links){
//     console.log(link.href)
// }



const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'rgb(255,108,134)'
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}
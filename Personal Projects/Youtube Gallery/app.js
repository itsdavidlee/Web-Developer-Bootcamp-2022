const videosContainer = document.getElementById('videosContainer')
let youtubeVideoIDs = [];

const loadVideos = () => {
    youtubeVideoIDs = ["9C74_rOgui8", "njTh_OwMljA"];
}

const displayVideos = () => {
    // for (let i = 0; i < youtubeVideoIDs.length; i++) {
    //     console.log(youtubeVideoIDs[i]);
    // }
    const htmlStringListArray = youtubeVideoIDs.map(function (id) {
        return `<li onclick = "clickVideo(event, '${id}')">
            <img class="thumbnail" src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Cover Image for Youtube Video with ID ${id}">
            <button class="delete-btn"> &times; </button> 
        </li>
        `
    });
    //htmlStringListArray will output an array with each element being a text of the HTML list, img, button.
    const videoHTMLStrings = htmlStringListArray.join('');
    //.join will combine all elements to make one string
    //videoHTMLStrings will output a string that includes all elements
    videosContainer.innerHTML = videoHTMLStrings;
};

loadVideos();
displayVideos();
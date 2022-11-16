const videosContainer = document.getElementById('videosContainer');
const videoIDInput = document.getElementById('videoID');
const popup = document.getElementById('popup');
const videoEl = document.querySelector('#popup > iframe');

let youtubeVideoIDs = [];

// localStorage.setItem('youtubeVideoIDs', JSON.stringify(["9C74_rOgui8", "njTh_OwMljA"]) )
const loadVideos = () => {
    youtubeVideoIDs = JSON.parse(localStorage.getItem('youtubeVideoIDs')) || [];
    console.log(youtubeVideoIDs);

    // youtubeVideoIDs = ["9C74_rOgui8", "njTh_OwMljA"];
};

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

const saveVideo = (e) => {
    e.preventDefault();
    const videoID = videoIDInput.value;
    youtubeVideoIDs.unshift(videoID); //this adds videoID into the array youtubeVideoIDs
    videoIDInput.value = ""; //resets the form to be blank after pressing save video button
    localStorage.setItem('youtubeVideoIDs', JSON.stringify(youtubeVideoIDs));
    displayVideos();

};

const clickVideo = (event, id) => {
    console.log(event,id);
    if(event.target.classList.contains('delete-btn')) {
        //remove the video from the youtubeVideoIDs list
        youtubeVideoIDs = youtubeVideoIDs.filter(i => {
        return i !== id});
        localStorage.setItem('youtubeVideoIDs', JSON.stringify(youtubeVideoIDs));
        displayVideos();
    
    }else {
        //show the popup
        videoEl.src=`https://www.youtube.com/embed/${id}`;
        popup.classList.add('open');
        popup.classList.remove('closed');
    }
}

const handlePopupClick = () => {
    popup.classList.add('closed');
    popup.classList.remove('open');
}

const deleteButton = () => {

}

loadVideos();
displayVideos();

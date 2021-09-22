const playBtn = document.querySelector('.video-bg-btn__button');
const modalVideo = document.querySelector('.video__modal');
const video = document.querySelector('.video__play');

playBtn.onclick = function (event) {
    modalVideo.style.display = "block";
    video.style.display = "block";
    video.src = "https://player.vimeo.com/video/127347999?title=0&amp;byline=0&amp;portrait=0;autoplay=1"
    event.stopPropagation();
}

modalVideo.onclick = function () {
    modalVideo.style.display = "none";
    video.style.display = "none";
    video.src = ""
}
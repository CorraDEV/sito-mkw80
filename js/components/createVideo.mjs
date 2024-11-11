export default function(videoLink){
    const videoBox = document.createElement('div');
    videoBox.classList.add('videoBox'); 
    const videoField = document.createElement('iframe');
    videoField.src = videoLink;
    videoField.setAttribute('frameborder', '0');
    videoField.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    videoField.allowFullscreen = true;
    const videoTitle = document.createElement('h3');
    videoTitle.classList.add('videoTitle');
    videoTitle.textContent = 'Titolo Video';
    videoBox.append(videoTitle, videoField);
    document.body.appendChild(videoBox);
}
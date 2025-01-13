const progress = document.getElementById('progresso');
const volume = document.getElementById('volume');

const videoTags = document.getElementsByTagName("video")
const videoPlayer = videoTags[0];

let isPlayed = false;

function load_video(url){
    videoPlayer.src = url;
    videoPlayer.load();
}

function playVideo(){
    if(!isPlayed){
        videoPlayer.play()
        isPlayed = true
    } else {}
}

function pauseVideo(){
    if(isPlayed){
        videoPlayer.pause()
        isPlayed = false
    } else {}
}

function getVideoDataEverySecond(){
    const porcentagem = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progress.value = porcentagem
    volume.value = videoPlayer.volume * 100
}

function setVideoTime(){
    const newTime = (progress.value / 100) * videoPlayer.duration;
    videoPlayer.currentTime = newTime
}

function setVideVolume(){
    const newVolume = volume.value / 100;
    videoPlayer.volume = newVolume
}

document.getElementById('play').addEventListener('click', playVideo)
document.getElementById('pause').addEventListener('click', pauseVideo)

videoPlayer.addEventListener('timeupdate', getVideoDataEverySecond)
progress.addEventListener('input', setVideoTime)
volume.addEventListener('input', setVideVolume)

progress.value = 0;
volume.value = 50
load_video("video.mp4")
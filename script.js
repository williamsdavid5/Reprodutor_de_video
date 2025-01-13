const videoPlayer = document.getElementById('videoPlayer');
const videoInput = document.getElementById('videoInput');
const cliqueText = document.getElementById('clique');

function loadVideo(file) {
    const fileURL = URL.createObjectURL(file);
    videoPlayer.src = fileURL;
    videoPlayer.load();
    videoPlayer.play();
    togglePlayPauseButtons(true);
    toggleCliqueText(false);
}

function togglePlayPauseButtons(isPlaying) {
    if (isPlaying) {
        playButton.style.display = 'none';
        pauseButton.style.display = 'flex';
    } else {
        playButton.style.display = 'flex';
        pauseButton.style.display = 'none';
    }
}

function toggleCliqueText(show) {
    cliqueText.style.display = show ? 'block' : 'none';
}

playButton.addEventListener('click', () => {
    videoPlayer.play();
    togglePlayPauseButtons(true);
    toggleCliqueText(false);
});

pauseButton.addEventListener('click', () => {
    videoPlayer.pause();
    togglePlayPauseButtons(false);
    toggleCliqueText(true);
});

cliqueText.addEventListener('click', () => videoInput.click());

videoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) loadVideo(file);
});

videoPlayer.addEventListener('ended', () => {
    togglePlayPauseButtons(false);
    toggleCliqueText(true);
});

const volumeBar = document.getElementById('volume');
const progressBar = document.getElementById('progresso');

volumeBar.addEventListener('input', () => {
    videoPlayer.volume = volumeBar.value / 100;
});

videoPlayer.addEventListener('timeupdate', () => {
    const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.value = progress || 0;
});

progressBar.addEventListener('input', () => {
    videoPlayer.currentTime = (progressBar.value / 100) * videoPlayer.duration;
});


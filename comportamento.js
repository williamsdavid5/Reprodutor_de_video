
const volumeSlider = document.getElementById('volume');
const volumeAlto = document.getElementById('volumeAlto');
const mudo = document.getElementById('mudo');


function verificarVolume() {
    if (volumeSlider.value == 0) {
        volumeAlto.style.display = 'none';
        mudo.style.display = 'flex';
    } else {
        volumeAlto.style.display = 'flex';
        mudo.style.display = 'none';
    }
}


volumeSlider.addEventListener('input', verificarVolume);


verificarVolume();

// Seleciona as imagens de play e pause
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

// Função para alternar entre as imagens de play e pause
function togglePlayPause() {
    if (playButton.style.display !== 'none') {
        // Se a imagem de play estiver visível, oculta ela e mostra a de pause
        playButton.style.display = 'none';
        pauseButton.style.display = 'flex';
    } else {
        // Se a imagem de pause estiver visível, oculta ela e mostra a de play
        playButton.style.display = 'flex';
        pauseButton.style.display = 'none';
    }
}

// Adiciona um evento de clique nas imagens para alternar entre elas
playButton.addEventListener('click', togglePlayPause);
pauseButton.addEventListener('click', togglePlayPause);

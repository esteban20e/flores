/**/
// Obtener el audio y el control
const audio = document.getElementById('miAudio');
const audioControl = document.getElementById('audioControl');

// Función para reproducir o pausar el audio
audioControl.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        audioControl.textContent = 'PAUSA'; // Cambia el icono a "pausa"
    } else {
        audio.pause();
        audioControl.textContent = 'MUSICA'; // Cambia el icono a "reproducir"
    }
});

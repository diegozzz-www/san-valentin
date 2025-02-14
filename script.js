const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const response = document.getElementById('response');
const audio = document.getElementById('song');
const audioMessage = document.getElementById('audio-message');
const heartImage = document.getElementById('heart-image'); // Selecciona la imagen del corazón

// Intenta reproducir la canción automáticamente al cargar la página
window.addEventListener('load', () => {
    audio.play()
        .then(() => {
            console.log("La canción se está reproduciendo automáticamente...");
        })
        .catch(error => {
            console.error("Error al reproducir automáticamente:", error);
            audioMessage.classList.remove('hidden'); // Muestra el mensaje para interactuar
        });
});

// Reproduce la canción, muestra el mensaje, cambia la imagen y oculta el botón "No" al hacer clic en "Sí"
yesBtn.addEventListener('click', () => {
    audio.play() // Reproduce la canción
        .then(() => {
            console.log("La canción se está reproduciendo...");
            response.classList.remove('hidden'); // Muestra el mensaje
            heartImage.src = "assets/corazon-nuevo.png"; // Cambia la imagen del corazón
            heartImage.alt = "Corazón nuevo"; // Actualiza el texto alternativo
            heartImage.classList.add('new-heart'); // Aplica la clase para bordes suavizados y crecimiento
            noBtn.style.display = 'none'; // Oculta el botón "No"
        })
        .catch(error => {
            console.error("Error al reproducir la canción:", error);
            alert("¡Haz clic en la página para permitir la reproducción de audio!");
        });
});

// Mueve el botón "No" más rápido y dentro de un área limitada
noBtn.addEventListener('mouseover', () => {
    // Limita el movimiento del botón "No" dentro del contenedor
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    // Mueve el botón "No" a una nueva posición aleatoria
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.transition = 'left 0.3s ease, top 0.3s ease'; // Movimiento más rápido
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    // Hace crecer el botón "Sí"
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 2}px`;
});

// Reproduce la canción al hacer clic en cualquier parte de la página
document.body.addEventListener('click', () => {
    audio.play()
        .then(() => {
            console.log("La canción se está reproduciendo...");
            audioMessage.classList.add('hidden'); // Oculta el mensaje
        })
        .catch(error => {
            console.error("Error al reproducir la canción:", error);
        });
});
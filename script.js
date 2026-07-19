document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    const enterBtn = document.getElementById("enterBtn");
    const welcomeScreen = document.getElementById("welcomeScreen");

    // 1. Cuando hacen clic en "Abrir Invitación"
    enterBtn.addEventListener("click", () => {
        // Intentamos reproducir el audio (el navegador lo dejará porque hubo un clic)
        music.play()
            .then(() => {
                // Ocultamos la pantalla de bienvenida
                welcomeScreen.style.display = "none";
                musicBtn.innerHTML = "🔇 Pausar Música";
            })
            .catch(error => {
                console.error("Error al reproducir automáticamente:", error);
                // Si falla por algo, igual dejamos entrar al usuario
                welcomeScreen.style.display = "none";
            });
    });

    // 2. Tu botón clásico de Pausa/Play por si quieren silenciarla después
    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicBtn.innerHTML = "🔇 Pausar Música";
        } else {
            music.pause();
            musicBtn.innerHTML = "🎵 Música";
        }
    });
});

// =====================
// CUENTA REGRESIVA
// =====================

const eventDate = new Date("August 2, 2026 16:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if(distance < 0){

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML =
        "<h2>¡Ha llegado el gran día!</h2>";
    }

},1000);

// =====================
// ANIMACIÓN SCROLL
// =====================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if(top < visible){

            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

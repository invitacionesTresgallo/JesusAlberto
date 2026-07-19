// Envolvemos todo para asegurarnos de que el HTML ya cargó por completo
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    // Verificación de seguridad en la consola
    console.log("¿Botón detectado?:", button);
    console.log("¿Audio detectado?:", music);

    if (!music || !button) {
        console.error("Error: No se encontró el botón o el audio en el HTML. Revisa los IDs.");
        return;
    }

    button.addEventListener("click", () => {
        if (music.paused) {
            music.play()
                .then(() => {
                    button.innerHTML = "🔇 Pausar Música";
                    console.log("¡Música sonando correctamente!");
                })
                .catch(error => {
                    console.error("Error al reproducir el audio:", error);
                });
        } else {
            music.pause();
            button.innerHTML = "🎵 Música";
            console.log("Música pausada por el usuario.");
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

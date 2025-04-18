const petalsContainer = document.getElementById('petals');
for (let i = 0; i < 30; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
  petal.style.animationDelay = (Math.random() * 10) + 's';
  petalsContainer.appendChild(petal);
}

// Cuenta regresiva
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-06-07T18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "¡Ya comenzó la fiesta!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Faltan <strong>${days}</strong> días, <strong>${hours}</strong> h <strong>${minutes}</strong> min <strong>${seconds}</strong> s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

function openRSVP() {
  document.getElementById("rsvp-modal").style.display = "flex";  // Cambiar display a flex
}

function closeRSVP() {
  document.getElementById("rsvp-modal").style.display = "none";  // Ocultar el modal
}

document.getElementById("rsvp-modal").addEventListener("click", function(event) {
  if (event.target === this) {
    closeRSVP();  // Cierra el modal si se hace clic en el fondo
  }
});

const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});


document.getElementById('btnInvitacion').addEventListener('click', () => {
    const sobre = document.querySelector('.sobre-elegante');
    sobre.classList.add('abierto');
  
    setTimeout(() => {
      const cortinilla = document.getElementById('cortinilla');
      const contenido = document.getElementById('contenidoPrincipal');
  
      cortinilla.style.opacity = 0;
  
      setTimeout(() => {
        cortinilla.style.display = 'none';
        contenido.style.display = 'block';
  
        // Forzamos reflow para que la transición se aplique
        void contenido.offsetWidth;
  
        contenido.classList.add('visible');
         // 🔊 Reproduce la canción al mostrar el contenido
      audio.play();
      }, 1000);
    }, 1000);
  });


  document.getElementById("rsvp-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const acompanantes = document.getElementById("acompanantes").value;
  
    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScDO5wSafVq-u4CERLCdQ2xapwywQybIeTy0dRpqXUR5vxzYA/formResponse";
  
    const formData = new URLSearchParams();
    formData.append("entry.185922489", nombre);
    formData.append("entry.914988613", acompanantes);
  
    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        alert("¡Gracias por confirmar tu asistencia!");
        document.getElementById("rsvp-form").reset();
        closeRSVP();
      })
      .catch((error) => {
        alert("Hubo un error al enviar el formulario.");
        console.error(error);
      });
  });
  
  function closeRSVP() {
    document.getElementById("rsvp-modal").style.display = "none";
  }

 
  document.addEventListener("scroll", () => {
    const section = document.querySelector(".seccion-compartir");
    const bg = section.querySelector(".parallax-bg-compartir");
    const speed = 0.4;

    const rect = section.getBoundingClientRect();
    const offset = window.scrollY + rect.top;
    const scrollY = window.scrollY;
    const distance = scrollY - offset;

    bg.style.transform = `translateY(${distance * speed}px)`;
  });
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

// Modal RSVP
function openRSVP() {
  document.getElementById("rsvp-modal").style.display = "block";
}

function closeRSVP() {
  document.getElementById("rsvp-modal").style.display = "none";
}


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


  let currentIndex = 0;

  function moveCarousel(direction) {
    const track = document.getElementById("carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;

    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }
// Seleccionamos el contenedor de corazones
const heartsContainer = document.querySelector('.hearts-container');

// Creamos múltiples corazones
const numHearts = 30; // Cambia este número para agregar más o menos corazones

for (let i = 0; i < numHearts; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Posición inicial aleatoria
  const startX = Math.random() * window.innerWidth;
  heart.style.left = `${startX}px`;

  // Duración de animación aleatoria
  const duration = Math.random() * 3 + 4; // Entre 4 y 7 segundos
  heart.style.animationDuration = `${duration}s`;

  // Retraso de inicio aleatorio
  const delay = Math.random() * 3; // Hasta 3 segundos de retraso
  heart.style.animationDelay = `${delay}s`;

  // Agregamos el corazón al contenedor
  heartsContainer.appendChild(heart);
}

// Lista inicial de notas (100 notas)
let notes = [
    "Necesito tu amor antes de caer...", 
    "Quiero estar contigo todo el tiempo...",
    "Me dejaste encantado tan rápido...",
    "Te ves más hermosa que nunca...",
    "te voy a amar hasta que mis pulmones no puedan más...",
    "Mírate eres el cielo encarnado...",
    "Me derrito como un helado, cuando sonríes...",
    "Eres la luz en mi oscuridad...",
    "Tú mandas nena, yo solo quiero ser tuyo...",
    "Cariño, moriría por ti, sí...",
    "No funciona, porque eres perfecta...",
    "Eres como el mundo entero para mí...",
    "Eres mi salvación, eres mi escudo...",
    "Eres toda hermosa, amada mía; no hay defecto en ti. (Cantares 4:7)",
    "Que tierna y preciosa eres...",
    "Quiero ver la manera en la que opacas los paisajes con tu belleza...",
    "Tú eres mi paisaje favorito...",
    "Me encantas...",
    "Te amo pececita",
    "Déjame ver tu rostro y escuchar tu voz; porque tu voz es dulce, y tu rostro encantador. (Cantares 2:14)",
    "¡Qué hermosa eres, qué encantadora, amor mío, llena de delicias! (Cantares 7:6)",
    "Me robaste el corazón, novia mía; lo robaste con una sola mirada... (Cantares 4:9)",
    "Eres mi paz...",
    "Eres mi felicidad...",
    "Tu belleza no se compara con nada en este mundo; eres única",
    "Eres el sueño que mi alma acaricia, la luz que mi corazón ansía.",
    "Eres como la luna, hermosa y constante, aún en la más oscura noche.",
    "Eres el fuego que enciende mi alma y la luz que guía mis sueños.",
    "Tu piel, oh si tu piel y huesos se vuelven algo hermoso...",
    "Mira las estrellas, mira cómo brillan para ti..."
];

document.getElementById("reset-button").addEventListener("click", () => {
    if (confirm("¿Estás seguro de que deseas reiniciar las notas? Se perderán las notas restantes.")) {
      localStorage.removeItem("remainingNotes");
      location.reload(); // Recargar la página para aplicar los cambios
    }
  });
  

// Cargar notas desde localStorage si existen
const savedNotes = localStorage.getItem("remainingNotes");
if (savedNotes) {
  notes = JSON.parse(savedNotes);
}

const noteDisplay = document.getElementById("note-display");
const remainingCount = document.getElementById("remaining-count");
const openButton = document.getElementById("open-button");

// Actualizar el contador de notas restantes
function updateRemainingCount() {
  remainingCount.textContent = `Notas restantes: ${notes.length}`;
}

// Mostrar una nota aleatoria
function openNote() {
    if (notes.length === 0) {
      noteDisplay.textContent = "¡Ya has leído todas las notas!";
      openButton.disabled = true;
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * notes.length);
    const note = notes.splice(randomIndex, 1)[0];

    // Reiniciar la animación (importante para la primera vez)
  noteDisplay.style.animation = "none"; 
  void noteDisplay.offsetWidth; // Forzar redibujado del elemento
  
    // Mostrar la nota y aplicar animación
    noteDisplay.textContent = note;
    noteDisplay.style.visibility = "visible";
    noteDisplay.style.opacity = "1";
    noteDisplay.style.animation = "note-rise 8s ease-out forwards";
  
    // Guardar las notas restantes en localStorage
    localStorage.setItem("remainingNotes", JSON.stringify(notes));
    updateRemainingCount();
  
    // Ocultar la nota después de la animación
    setTimeout(() => {
      noteDisplay.style.visibility = "hidden";
      noteDisplay.style.opacity = "0";
      noteDisplay.style.animation = "none"; // Resetea la animación
    }, 10000); // Duración de la animación en milisegundos
  }
  

// Inicializar la página
updateRemainingCount();
openButton.addEventListener("click", openNote);


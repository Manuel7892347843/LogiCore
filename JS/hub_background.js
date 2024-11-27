// Array con i due colori di sfondo
const colors = ["#000000", "#7d7d7d"]; // Colori in formato HEX
let currentIndex = 0;

// Funzione per cambiare colore
function changeBackgroundColor() {
  // Cambia il colore di sfondo
  document.body.style.backgroundColor = colors[currentIndex];
  // Passa al prossimo colore, ciclicamente
  currentIndex = (currentIndex + 1) % colors.length;
}

// Cambia il colore ogni 3 secondi
setInterval(changeBackgroundColor, 3000);
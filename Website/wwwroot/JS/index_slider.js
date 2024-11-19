let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  loadTextForSlide(slideIndex);
}

/*
function loadTextForSlide(slideId) {
  fetch(`/api/Text/${slideId}`)
    .then(response => {
      if (!response.ok) {
        console.error(`Errore nel caricamento del testo per slide ${slideId}: ${response.statusText}`);
        throw new Error("Errore nel caricamento del testo.");
      }
      return response.json();
    })
    .then(data => {
      if (data.text) {
        document.querySelector(`#text_${slideId}`).textContent = data.text;
      } else {
        document.querySelector(`#text_${slideId}`).textContent = "Testo non trovato.";
      }
    })
    .catch(error => {
      console.error(`Errore nel caricamento del testo per slide ${slideId}:`, error);
      document.querySelector(`#text_${slideId}`).textContent = "Errore nel caricamento del testo.";
    });
}

loadTextForSlide(1);*/

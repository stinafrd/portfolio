const switchToEnglishButton = document.getElementById('switchToEnglish');
const switchToGermanButton = document.getElementById('switchToGerman');
const deutschElements = document.querySelectorAll('.deutsch');
const englischElements = document.querySelectorAll('.englisch');

// Überprüfen, ob die Sprache im Local Storage gespeichert ist
let isDeutsch = localStorage.getItem('language') === 'de';

// Funktion zum Setzen der Sprache
function setLanguage(isDeutsch) {
    if (isDeutsch) {
        deutschElements.forEach(element => element.style.display = 'block');
        englischElements.forEach(element => element.style.display = 'none');
        switchToGermanButton.classList.add('active');
        switchToEnglishButton.classList.remove('active');
    } else {
        deutschElements.forEach(element => element.style.display = 'none');
        englischElements.forEach(element => element.style.display = 'block');
        switchToEnglishButton.classList.add('active');
        switchToGermanButton.classList.remove('active');
    }
}

// Initial setzen der Sprache
setLanguage(isDeutsch);

switchToEnglishButton.addEventListener('click', () => {
    isDeutsch = false;
    localStorage.setItem('language', 'en'); // Sprache im Local Storage speichern
    setLanguage(isDeutsch);
});

switchToGermanButton.addEventListener('click', () => {
    isDeutsch = true;
    localStorage.setItem('language', 'de'); // Sprache im Local Storage speichern
    setLanguage(isDeutsch);
});


//burgermenü
$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').toggleClass('show');
    });
  });
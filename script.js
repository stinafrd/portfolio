//Filterbuttons
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter_buttons button');

    // Funktion zum Aktivieren eines Filters
    function activateFilter(button) {
        filterButtons.forEach(function(btn) {
            btn.classList.remove('active'); // Entferne die aktive Klasse von allen Buttons
        });
        button.classList.add('active'); // Füge die aktive Klasse zum ausgewählten Button hinzu
    }

    // Füge den Klick-Event-Listener zu den Filter-Buttons hinzu
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            activateFilter(button); // Aktiviere den ausgewählten Filter
            const filterName = button.getAttribute('data-name');

            // Zeige oder verstecke die entsprechenden Karten basierend auf dem ausgewählten Filter
            const carts = document.querySelectorAll('.cart');
            carts.forEach(function(cart) {
                const cartDataName = cart.getAttribute('data-name');
                if (filterName === 'all' || filterName === cartDataName) {
                    cart.classList.remove('hide');
                } else {
                    cart.classList.add('hide');
                }
            });
        });
    });
});


//Biene
$(document).ready(function() {
    animateBiene();
    
    // Event-Handler für den Klick auf die Biene
    $('#biene').on('click', function() {
        openPopup();
    });

    // Event-Handler für das Schließen des Popups
    $('.popup-close').on('click', function() {
        closePopup();
    });
});

function animateBiene() {
    var randomX = Math.round(Math.random() * (($(window).width() - ($('#biene').width()))));
    var randomY = Math.round(Math.random() * ($(window).height() - ($('#biene').height())));

    $('#biene').animate({
        'left': randomX,
        'top': randomY
    }, 5000, function() {
        animateBiene();
    });
}



// Funktion zum Öffnen des Pop-up-Fensters
function openPopup() {
    $('#popup-container').fadeIn();
}

// Funktion zum Schließen des Pop-up-Fensters
function closePopup() {
    $('#popup-container').fadeOut();
}

$(document).ready(function () {
    $('#openPopup').on('click', function() {
        openPopup();
    });

    // Fügen Sie die Schließfunktion für den Schließen-Button hinzu
    $('#popup-close').on('click', function() {
        closePopup();
    });

    // Fügen Sie eine Schließfunktion für den Hintergrund hinzu, damit das Pop-up auch beim Klicken auf den Hintergrund geschlossen werden kann
    $('#popup-container').on('click', function(event) {
        if ($(event.target).is('#popup-container') || $(event.target).is('#popup-close')) {
            closePopup();
        }
    });

    // Fügen Sie die Schließfunktion auch für den deutschen Schließen-Button hinzu
    $('.deutsch #popup-close').on('click', function() {
        closePopup();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Zmieniamy selektor, aby działał z obrazem "ja".
    const images = document.querySelectorAll(".ja");

    images.forEach(image => {
        image.addEventListener("mouseenter", function () {
            // Wpierw szary dla wszystkich innych obrazów
            images.forEach(otherImage => {
                if (otherImage !== image) {
                    otherImage.style.filter = "grayscale(1)"; // Szary dla innych
                    otherImage.style.transform = "scale(1)";  // Przywrócenie skali
                    otherImage.style.zIndex = 2;              // Zmiana z-index na niższy
                }
            });

            // Dla aktualnego obrazu
            image.style.filter = "grayscale(0)"; // Kolor dla wybranego
            image.style.transform = "scale(1.4)"; // Powiększenie
            image.style.zIndex = 4;               // Wyższy z-index, aby był na wierzchu
        });

        image.addEventListener("mouseleave", function () {
            // Przywracanie efektu oryginalnego dla wszystkich
            images.forEach(otherImage => {
                otherImage.style.filter = "grayscale(0)"; // Przywrócenie koloru
                otherImage.style.transform = "scale(1)";  // Przywrócenie skali
                otherImage.style.zIndex = 3;              // Przywrócenie pierwotnego z-indexu
            });
        });
    });
});

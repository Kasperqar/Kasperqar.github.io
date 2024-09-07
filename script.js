document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".doCV");
  
    images.forEach(image => {
      image.addEventListener("mouseenter", function () {
        images.forEach(otherImage => {
          if (otherImage !== image) {
            otherImage.style.filter = "grayscale(1)";
            otherImage.style.transform = "scale(1)";
          }
        });
  
        image.style.filter = "grayscale(0)";
        image.style.transform = "scale(1.4)";
        image.style.zIndex = 4; // Wyższy indeks by zdjęcie było na najwyższej warstwie
      });
  
      image.addEventListener("mouseleave", function () {
        images.forEach(otherImage => {
          otherImage.style.filter = "grayscale(0)";
          otherImage.style.transform = "scale(1)";
          otherImage.style.zIndex = 3; // Przywrócenie do pierwszej warstwy
        });
      });
    });
  });

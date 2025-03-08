document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let index = 0;

  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth + 20; 

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (index < totalSlides - 1) {
      index++;
      updateSlider();
    }
  });

  function updateSlider() {
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
    checkButtons();
  }

  function checkButtons() {
    prevBtn.style.opacity = index === 0 ? "0.5" : "1";
    prevBtn.style.pointerEvents = index === 0 ? "none" : "auto";

    nextBtn.style.opacity = index === totalSlides - 1 ? "0.5" : "1";
    nextBtn.style.pointerEvents = index === totalSlides - 1 ? "none" : "auto";
  }

  checkButtons(); 
});

function openModal(imageSrc) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = imageSrc;
}

function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}

// SCROLL FADE EFFECT

const fadeElements = document.querySelectorAll('.fade-scroll');

window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;

  fadeElements.forEach(element => {

    element.style.opacity = 1 - scrollY / 700;

    element.style.transform =
      `translateY(${scrollY * 0.2}px)`;

  });

});


// SIMPLE BUTTON INTERACTION

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    if(button.innerText === "Add to Cart"){
      alert("Product added to cart.");
    }

  });

});
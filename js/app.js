/* SCROLL ANIMATION */
const animatedItems = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
    animatedItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            item.classList.add('show');
        }
    });
});

/* LANGUAGE TOGGLE */
let isBangla = false;
document.getElementById('langToggle').onclick = () => {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = isBangla ? el.dataset.en : el.dataset.bn;
    });
    isBangla = !isBangla;
};
/* HERO BACKGROUND FADE SLIDER */

const heroImages = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg"
];

let heroIndex = 0;
const heroBg = document.getElementById("heroBg");

/* Set initial image */
heroBg.style.backgroundImage =
  `url(${heroImages[heroIndex]})`;

setInterval(() => {
  // Fade out
  heroBg.style.opacity = 0;

  setTimeout(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;

    heroBg.style.backgroundImage =
      `url(${heroImages[heroIndex]})`;

    // Fade in
    heroBg.style.opacity = 1;

  }, 1500); // match CSS transition time

}, 6000); // change image every 6s

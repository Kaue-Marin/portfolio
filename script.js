const menuOpen = document.querySelector(".menu-open");
const menuClosed = document.querySelector(".menu-closed");
const nav = document.querySelector(".navbar-itens");

// alternar a visibilidade do menu-bar
function toggleMenuVisibility() {
  menuOpen.classList.toggle("active");
  menuClosed.classList.toggle("active");
  nav.classList.toggle("active");
}

menuOpen.addEventListener("click", toggleMenuVisibility);

menuClosed.addEventListener("click", toggleMenuVisibility);

// mudar propriedades do menu após scroll da página
window.addEventListener("scroll", function () {
  const isScrolled = window.scrollY > 0;
  if (isScrolled) {
    menuClosed.classList.add("active");
    menuOpen.classList.remove("active");
    nav.classList.add("active");
  } else {
    menuOpen.classList.add("active");
    menuClosed.classList.remove("active");
    nav.classList.remove("active");
  }
});

// CARROSSEL

const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll(".projects-box")[0];
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false,
  prevPageX,
  prevScrollLeft;

let firstImgWidth = firstImg.clientWidth + 100;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon);
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = (e) => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

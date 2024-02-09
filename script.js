const menuOpen = document.querySelector(".menu-open");
const menuClosed = document.querySelector(".menu-closed");
const nav = document.querySelector(".navbar-itens");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("active");
  menuClosed.classList.toggle("active");
  nav.classList.toggle("active");
});

menuClosed.addEventListener("click", () => {
  menuOpen.classList.toggle("active");
  menuClosed.classList.toggle("active");
  nav.classList.toggle("active");
});

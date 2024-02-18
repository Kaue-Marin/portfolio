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
  const root = document.documentElement;
  if (isScrolled) {
    root.style.setProperty("--header-color", "hsl(var(--hue-color), 69%, 61%)");
    document.querySelector(".header").style.background = "var(--color-white)";
  } else {
    root.style.setProperty("--header-color", "#fff");
    document.querySelector(".header").style.background = "none";
  }
});

// CARROSSEL

const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll(".projects-box")[0];
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false,
  prevPageX,
  prevScrollLeft;

let firstImgWidth = firstImg.clientWidth; //firstImg.clientWidth + 100;

// Função para rolar o carrossel para o próximo item
function scrollToNextItem() {
  const scrollPosition = carousel.scrollLeft + carousel.offsetWidth; // Posição de rolagem para o próximo item
  const items = carousel.querySelectorAll(".projects-box");
  const firstItemWidth = items[0].offsetWidth;
  const spaceBetweenItems = 20; // Espaço desejado entre os itens (você pode ajustar esse valor conforme necessário)

  // Encontrar o próximo item na direção desejada
  let nextItemIndex = -1;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.offsetLeft >= scrollPosition) {
      nextItemIndex = i;
      break;
    }
  }

  // Se o próximo item for encontrado, rolar para ele com o espaço à esquerda
  if (nextItemIndex !== -1) {
    const nextItem = items[nextItemIndex];
    const scrollLeftPosition = nextItem.offsetLeft - spaceBetweenItems;
    carousel.scrollLeft = scrollLeftPosition;
  }
}

// Adicionar evento de clique aos ícones de seta
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.id === "left") {
      carousel.scrollLeft -= carousel.offsetWidth; // Rolar para o item anterior
    } else {
      scrollToNextItem(); // Rolar para o próximo item
    }
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

/*FORM*/

document.querySelector(".btn-submit").addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.href = "https://my-portfolio-dm10.onrender.com/";
  alert("email enviado :)");
});

const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
  desktopNav.classList.add("hide");
  searchContainer.classList.remove("hide");
  overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
})

// Mobile Version 

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
  navContainer.classList.toggle("active");
})

const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(" .nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
  searchBar.classList.add("active");
  nav.classList.add("move-up");
  desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
  nav.classList.remove("move-up");
  desktopNav.classList.remove("move-down");
})

function videoselector(videoLink) {
  document.getElementById('slider').src = videoLink;
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})


// javascript for video slider 
const btns = document.querySelectorAll(".nav-btn")
const slider = document.querySelectorAll(".content-slide")
const contents = document.querySelectorAll(".content")
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active")
  });

  slider.forEach((slide) => {
    slide.classList.remove("active")
  });

  contents.forEach((content) => {
    content.classList.remove("active")
  });
 

  btns[manual].classList.add("active");
  slider[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

const config = {
  distance: '20px',
  duration: 1000,
  delay: 50,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  container: document.querySelector('body'),
  origin: 'bottom'
}
ScrollReveal().reveal('.reveal', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  viewFactor: 0.5
});
ScrollReveal().init(config)

const revealElements = document.querySelectorAll('.reveal')
revealElements.forEach((revealElement) => {
  ScrollReveal().reveal(revealElement)
})
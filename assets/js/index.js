console.log("Leah");

const toggleMenu = document.querySelector(".toggleMenu");
const navMenu = document.querySelector(".navMenu");
const body = document.querySelector("body");

toggleMenu.addEventListener("click", () => {
  console.log("clicked");
  toggleMenu.classList.toggle("is-open");
  navMenu.classList.toggle("is-open");
  body.classList.toggle("is-open");
});

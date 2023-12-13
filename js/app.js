const navBtn = document.querySelector("#navBtn");
const mobileNav = document.querySelector("#mobileNav");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

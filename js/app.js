const navBtn = document.querySelector("#navBtn");
const mobileNav = document.querySelector("#mobileNav");
const hamburgerLines = document.querySelectorAll(".btn-bar");

navBtn.addEventListener("click", () => {
  // slide menu in/out
  mobileNav.classList.toggle("active");
  // animate button
  navBtn.classList.toggle("active");
  navBtn.classList.toggle("inactive");
  // update aria-hidden
  let isHidden = mobileNav.getAttribute("aria-hidden") === "true";
  mobileNav.setAttribute("aria-hidden", !isHidden);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navBtn.classList.add("inactive");
    navBtn.classList.remove("active");
    mobileNav.classList.remove("active");
  }
});

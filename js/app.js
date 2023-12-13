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
  // remove animation
  setTimeout(() => {
    hamburgerLines.forEach((bar) => {
      bar.style.animation = null;
    });
  }, 600);
});

//** ==== Toggle Nav Btn ====  */
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn");
const navBar = document.querySelector("[data-navBar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn ]");

const navElements = [overlay, navOpenBtn, navCloseBtn];

//?  === Event  === */

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", () => {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

//** ===== Header Scoll ===  */

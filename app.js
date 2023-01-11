// D R O P D O W N   M E N U
let isInMenu = false;
const dropdownMenus = document.querySelectorAll(".dropdown-menu");
const dropdowns = document.querySelectorAll(".dropdown");

dropdownMenus.forEach((dropdownMenu) => {
  dropdownMenu.addEventListener("mouseenter", () => {
    isInMenu = true;
  });

  dropdownMenu.addEventListener("mouseleave", () => {
    isInMenu = false;
    dropdownMenu.classList.remove("show");
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!isInMenu) {
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      }
    }, 200);
  });
});

const button = document.querySelector(".chevron-button");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  console.log("button clicked");
  menu.classList.toggle("is-open");
});

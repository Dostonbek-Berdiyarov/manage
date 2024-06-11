const elHamburger = document.querySelector("#hamburger");
const elNavigation = document.querySelector("#navigation");

elHamburger.addEventListener("click", () => {
  elHamburger.classList.toggle("cross");
  elNavigation.classList.toggle("block");
  elNavigation.classList.toggle("hidden");
});

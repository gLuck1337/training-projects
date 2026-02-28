const burger = document.getElementById("burgerBtn");

burger.addEventListener("click", () => {
  const menu = document.getElementById("nav__menu");
  menu.classList.toggle("nav__menu--active");
});

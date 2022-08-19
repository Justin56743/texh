function togleMenu() {

  const menu = document.getElementById("menu");
  const navLinks = document.getElementById("navLinks");
  let isMenuOpen = navLinks.classList.toggle("hidden");

  if (isMenuOpen) {
    menu.innerHTML = "menu";
  } else {
    menu.innerHTML = "close";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const menuScript = [];
  const burgerBtn = document.querySelector("#jsHeaderBurger");
  if (burgerBtn) {
    menuScript.scripts = function() {
      const burgerMenu = document.getElementById("jsBurgerMenu");
      const btnCloseBurgerMenu = document.getElementById("jsBurgerMenuClose");
      const wrapper = document.querySelector(".wrapper");

      menuScript.showBurgerMenu = function() {
        burgerBtn.addEventListener("click", function(e) {
          e.preventDefault();
          burgerMenu.classList.toggle("header__menu--hidden");
          wrapper.classList.toggle("wrapper--overflow");
        });
      };

      menuScript.hideMenuBurger = function() {
        btnCloseBurgerMenu.addEventListener("click", function(e) {
          e.preventDefault();
          burgerMenu.classList.toggle("header__menu--hidden");
          wrapper.classList.toggle("wrapper--overflow");
        });
      };

      menuScript.showBurgerMenu();
      menuScript.hideMenuBurger();
    };
    menuScript.scripts();
  }
});

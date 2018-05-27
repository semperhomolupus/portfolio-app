document.addEventListener("DOMContentLoaded", function() {
  const index = {};
  const welcomePage = document.querySelector(".welcome");
  if (welcomePage) {
    index.script = function() {
      const btnForToggleSide = document.getElementById("jsAuthBbtn");
      const btnReturn = document.getElementById("jsAuthBtnReturn");
      const personCard = document.getElementById("jsPersonCard");
      const personCardSideFront = personCard.querySelector("#jsPersonCardFront");
      const personCardSideBack = personCard.querySelector("#jsPersonCardBack");

      index.toggleCardSide = function() {
        btnForToggleSide.addEventListener("click", function(e) {
          e.preventDefault();
          btnForToggleSide.classList.add("welcome__auth-btn--hidden");
          personCardSideFront.classList.add("jsToggle");
          personCardSideBack.classList.remove("jsToggle");
        });
      };

      index.jsAuthBtnReturn = function() {
        btnReturn.addEventListener("click", function(e) {
          btnForToggleSide.classList.remove("welcome__auth-btn--hidden");
          personCardSideFront.classList.remove("jsToggle");
          personCardSideBack.classList.add("jsToggle");
        });
      };

      index.toggleCardSide();
      index.jsAuthBtnReturn();
    };

    index.script();
  }
});

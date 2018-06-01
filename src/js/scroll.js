document.addEventListener("DOMContentLoaded", function() {
  const headerScroll = function() {
    const headerScrollButton = document.getElementById("jsHeaderScroll");
    if (headerScrollButton) {
      const windowHeight = window.innerHeight;
      headerScrollButton.addEventListener("click", function(e) {
        e.preventDefault();
        window.scroll({
          top: windowHeight + 150,
          behavior: "smooth",
        });
      });
    }
  };

  const worksToUpScroll = function() {
    const toUpScrollBtn = document.getElementById("jsWorksToUpScroll");
    if (toUpScrollBtn) {
      const worksSlider = document.querySelector(".works-slider");
      const worksSliderPosition = worksSlider.offsetTop;

      toUpScrollBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.scroll({
          top: worksSliderPosition,
          behavior: "smooth",
        });
      });
    }
  };

  headerScroll();
  worksToUpScroll();
});

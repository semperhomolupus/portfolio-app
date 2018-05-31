document.addEventListener("DOMContentLoaded", function() {
  const headerScroll = function() {
    const headerScrollButton = document.getElementById("jsHeaderScroll");
    if (headerScrollButton) {
      let windowHeight = window.innerHeight;
      headerScrollButton.addEventListener("click", function(e) {
        e.preventDefault();
        window.scroll({
          top: windowHeight,
          behavior: "smooth",
        });
      });
    }
  };

  const worksToUpScroll = function() {
    const toUpScrollBtn = document.getElementById("jsWorksToUpScroll");
    if (toUpScrollBtn) {
      const worksSlider = document.querySelector(".works-slider");
      let worksSliderPosition = worksSlider.offsetTop;
      console.log(worksSliderPosition);
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

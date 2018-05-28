document.addEventListener("DOMContentLoaded", function() {
  const portfolio = [];
  const worksPage = document.querySelector(".works");
  if (worksPage) {
    portfolio.script = function() {
      const slider = document.querySelector(".works-slider");

      const slideActive = slider.querySelector(".works-slider__active");
      const slideActiveIMG = slideActive.querySelector(".works-slider__active-img");

      const slideBefore = slider.querySelector(".works-slider__slide--before");
      const slideBeforeIMG = slideBefore.querySelector(".works-slider__slide-img");

      const slideAfter = slider.querySelector(".works-slider__slide--after");
      const slideAfterIMG = slideAfter.querySelector(".works-slider__slide-img");

      const sliderTitle = slider.querySelector(".works-slider__title");
      const sliderDescr = slider.querySelector(".works-slider__descr");
      const sliderLink = slider.querySelector(".works-slider__read-more");

      let currentSlideNumber = 0;
      let beforeSlideNumber;
      let afterSlideNumber;
      let slidesLenght = slidesList.length - 1;

      portfolio.sliderInfoUpdate = function(number) {
        console.log(slidesList[number].title);
        sliderTitle.innerText = slidesList[number].title;
        sliderDescr.innerText = slidesList[number].description;
        sliderLink.setAttribute("href", slidesList[afterSlideNumber].link);
      };

      portfolio.slidesUpdate = function() {
        if (currentSlideNumber > 0 && currentSlideNumber < slidesLenght) {
          afterSlideNumber = currentSlideNumber + 1;
          beforeSlideNumber = currentSlideNumber - 1;
        } else if (currentSlideNumber === 0) {
          afterSlideNumber = currentSlideNumber + 1;
          beforeSlideNumber = slidesLenght;
        } else if (currentSlideNumber < 0) {
          currentSlideNumber = slidesLenght;
          afterSlideNumber = 0;
          beforeSlideNumber = currentSlideNumber - 1;
        } else if (currentSlideNumber >= slidesLenght) {
          currentSlideNumber = 0;
          afterSlideNumber = currentSlideNumber + 1;
          beforeSlideNumber = slidesLenght;
        }

        slideActiveIMG.setAttribute("src", slidesList[currentSlideNumber].image);
        slideBeforeIMG.setAttribute("src", slidesList[beforeSlideNumber].image);
        slideAfterIMG.setAttribute("src", slidesList[afterSlideNumber].image);

        portfolio.sliderInfoUpdate(currentSlideNumber);
      };

      portfolio.activeSlideUpdate = function() {
        setTimeout(function() {
          slideActiveIMG.classList.add("works-slider__active-img--animate");
        }, 0);
        setTimeout(portfolio.slidesUpdate, 250);
        setTimeout(function() {
          slideActiveIMG.classList.remove("works-slider__active-img--animate");
        }, 500);
      };

      portfolio.slidePrev = function() {
        slideBefore.addEventListener("click", function(e) {
          e.preventDefault();
          currentSlideNumber -= 1;
          portfolio.activeSlideUpdate();
        });
      };

      portfolio.slideNext = function() {
        slideAfter.addEventListener("click", function(e) {
          e.preventDefault();
          currentSlideNumber += 1;
          portfolio.activeSlideUpdate();
        });
      };

      portfolio.slidesUpdate();
      portfolio.slideNext();
      portfolio.slidePrev();
    };
    portfolio.script();
  }
});

var slidesList = [
  {
    title: "Soulvibes",
    image: "img/content/slide-1.jpg",
    description: "с медиа-плеером",
    link: "https://vk.com/semperhomolupus",
  },

  {
    title: "ТИАП ",
    image: "img/content/slide-2.jpg",
    description: "информационный портал",
    link: "https://vk.com/semperhomolupus",
  },

  {
    title: "Lending 3",
    image: "img/content/slide-3.jpg",
    description: "Описание 3",
    link: "https://vk.com/semperhomolupus",
  },

  {
    title: "Lending 4",
    image: "img/content/slide-4.jpg",
    description: "Описание 4",
    link: "https://vk.com/semperhomolupus",
  },

  {
    title: "Lending 5",
    image: "img/content/slide-5.jpg",
    description: "Описание 5",
    tags: "https://vk.com/semperhomolupus",
  },
];

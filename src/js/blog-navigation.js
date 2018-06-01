document.addEventListener("DOMContentLoaded", function() {
  const blogScript = {};
  const blogPage = document.querySelector(".blog");

  if (blogPage) {
    const blogSwipe = blogPage.querySelector(".blog-swipe");
    const blogNavigation = blogSwipe.querySelector(".blog-swipe__nav");
    const blogArticles = blogPage.querySelectorAll(".blog-article");
    const windowHeight = window.innerHeight;

    blogScript.stickyMenu = function() {
      const windowScrollHeight = window.pageYOffset;
      const windowScrollOptimalHeight = windowScrollHeight - 150;

      if (windowScrollOptimalHeight >= windowHeight) {
        blogSwipe.classList.add("blog-swipe--fixed");
      } else {
        blogSwipe.classList.remove("blog-swipe--fixed");
      }
    };

    blogScript.change = function() {
      for (var i = 0; i < blogArticles.length; i++) {
        // let c = [];
        // c.push(blogArticles[i].getBoundingClientRect());
        // let scrolltop = document.body.scrollTop + c.top;
        // console.log(scrolltop);
      }
    };

    window.onscroll = function() {
      blogScript.stickyMenu();
    };

    blogScript.change();
  }
});

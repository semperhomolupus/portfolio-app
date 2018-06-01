document.addEventListener("DOMContentLoaded", function() {
  const blogScript = {};
  const blogPage = document.querySelector(".blog");

  if (blogPage) {
    const blogSwipe = blogPage.querySelector(".blog-swipe");
    const blogNavigation = blogSwipe.querySelector(".blog-swipe__nav");
    const blogNavigationLinks = blogNavigation.querySelectorAll(".blog-swipe__nav-link");
    const blogArticles = blogPage.querySelectorAll(".blog-article");
    const windowHeight = window.innerHeight;

    blogScript.stickyMenu = function() {
      const windowScrollHeight = window.pageYOffset;

      if (windowScrollHeight >= windowHeight && windowScrollHeight < document.body.clientHeight - 600) {
        blogSwipe.classList.add("blog-swipe--fixed");
      } else {
        blogSwipe.classList.remove("blog-swipe--fixed");
      }
    };

    blogScript.getArticlesDistance = function() {
      for (var i = 0; i < blogArticles.length; i++) {
        let c = [];
        c.push(blogArticles[i].getBoundingClientRect().top);
        console.log(blogArticles[i].getBoundingClientRect().top);

        if (blogArticles[i].getBoundingClientRect().top <= 0) {
          blogNavigationLinks[i].classList.add("blog-swipe__nav-link--active");
        } else {
          blogNavigationLinks[i].classList.remove("blog-swipe__nav-link--active");
        }
      }
    };

    window.onscroll = function() {
      blogScript.stickyMenu();
      blogScript.getArticlesDistance();
    };
  }
});

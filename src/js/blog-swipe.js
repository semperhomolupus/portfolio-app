document.addEventListener("DOMContentLoaded", function() {
  const blog = [];
  const blogPage = document.querySelector(".blog");
  if (blogPage) {
    const blogSwipe = document.getElementById("jsSwipe");

    const blogSwipeBtn = document.getElementById("jsSwipeBtn");
    blog.scripts = function() {
      blog.showSwipe = function() {
        blogSwipeBtn.addEventListener("click", function(e) {
          e.preventDefault();
          blogSwipe.classList.toggle("blog-swipe--opened");
        });
      };
      blog.showSwipe();
    };
    blog.scripts();
  }
});

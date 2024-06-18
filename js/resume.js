// Smooth scrolling using JavaScript
document
  .querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        let target = document.querySelector(this.hash);
        target = target
          ? target
          : document.querySelector(`[name=${this.hash.slice(1)}]`);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

// Closes responsive menu when a scroll trigger link is clicked
document.querySelectorAll(".js-scroll-trigger").forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});

// Activate scrollspy to add active class to navbar items on scroll
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  document.querySelectorAll("#sideNav a").forEach((anchor) => {
    let refElement = document.querySelector(anchor.getAttribute("href"));
    if (
      refElement.offsetTop <= scrollPosition &&
      refElement.offsetTop + refElement.offsetHeight > scrollPosition
    ) {
      document.querySelector("#sideNav .active").classList.remove("active");
      anchor.classList.add("active");
    } else {
      anchor.classList.remove("active");
    }
  });
});

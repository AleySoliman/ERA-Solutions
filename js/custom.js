$(document).ready(function () {
  // Get heights
  let header_height = $("header").height();
  let nav_height = $("nav").height();
  let homeHeight = vhTOpx(100) - (header_height + nav_height);
  let windowWidth;

  // Convert vh to px
  function vhTOpx(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;

    var result = (y * value) / 100;
    return result;
  }

  homePageShow();
  $(window).resize(function () {
    homePageShow();
  });

  // Give to home page height 100% of the window height on load
  function homePageShow() {
    // get window width
    windowWidth = $(window).width();
    if (windowWidth < 1200) {
      homeHeight = vhTOpx(100) - header_height;
      $(".home .carousel-item").css("height", homeHeight);
    } else {
      header_height = $("header").height();
      nav_height = $("nav").height();
      homeHeight = vhTOpx(100) - (header_height + nav_height);
      $(".home .carousel-item").css("height", homeHeight);
    }
  }

  // fixed navbar on scroll
  $(window).scroll(function () {
    if (windowWidth >= 1200) {
      console.log("scroll");
      let top = $(window).scrollTop();
      if (top > vhTOpx(100)) {
        $("nav").slideDown("slow", function () {
          $("nav").css({
            position: "fixed",
            "background-color": "var(--primary-color-faded)",
            top: 0,
          });
        });
      } else {
        $("nav").css({
          position: "static",
          "background-color": "var(--primary-color)",
          top: "-100%",
        });
      }
    }
  });

  // Insert First letter of sentence
  const parents = $(".first-letter-parent");
  for (let i = 0; i < parents.length; i++) {
    let letter = parents[i].innerText[0];
    $(parents[i]).append(`<span class="first-letter">${letter}</span>`);
  }

  // Mobile Navbar
  const mobileNav = $(".mobile-nav");
  const mobileOverlay = $(".mobile-overlay");
  const menu = $(".menu");
  const cancel = $(".mobile-nav .cancel");
  const links = $(".mobile-nav li");
  menu.click(() => {
    mobileNav.css({
      right: "0",
    });
    mobileOverlay.css({
      right: "0",
    });
  });
  cancel.click(closeMobileNav);
  links.click(closeMobileNav);

  function closeMobileNav() {
    mobileNav.css("right", "-100%");
    mobileOverlay.css("right", "-100%");
  }
});

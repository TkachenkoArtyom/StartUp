$(document).ready(function() {
  // Owl-carousel
  $(".about").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 700,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });
  // owl - articles
  $(".articles").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 700,
    responsiveClass: true,
    items: 1,
    autoHeight: true
  });
  // Masonry
  $(".grid").masonry({
    itemSelector: ".item",
    columnWidth: ".item",
    percentPosition: true
  });

  //imageLoaded
  var $grid = $(".grid").masonry({});

  // layout Masonry after each image loads
  $grid.imagesLoaded().progress(function() {
    $grid.masonry("layout");
  });
  //tabs
  $(".wrapper .tabs .tab")
    .click(function() {
      $(".wrapper .tabs .tab")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      $(".tab_item")
        .hide()
        .eq($(this).index())
        .fadeIn();

      //imageLoaded
      var $grid = $(".grid").masonry({});

      // layout Masonry after each image loads
      $grid.imagesLoaded().progress(function() {
        $grid.masonry("layout");
      });
    })
    .eq(0)
    .addClass("active");
  //accordeon
  $(".accordeon dd")
    .hide()
    .prev()
    .click(function() {
      $(this)
        .parents(".accordeon")
        .find("dd")
        .not(this)
        .slideUp()
        .prev()
        .removeClass("active");
      $(this)
        .next()
        .not(":visible")
        .slideDown()
        .prev()
        .addClass("active");
    });
  // Hamburger
  $(document).on("click", ".hamburger", function() {
    $(".menu ul").toggleClass("active");
    $(".menu ul > li").slideToggle(100);
    $(".hamburger").toggleClass("is-active");
  });

  //  Resize Window
  function resizeBlock() {
    if (window.matchMedia("screen and (max-width: 992px)").matches) {
      $(".headhesive ul > li,.menu ul > li").slideUp(100);
      $(".hamburger").removeClass("is-active");
      $(".menu ul").removeClass("active");
    } else if (window.matchMedia("screen and (min-width: 992px)").matches) {
      $(".hamburger").removeClass("is-active");
      $(".menu ul").addClass("active");
      $(".headhesive ul > li,.menu ul > li").slideDown(100);
    }
  }

  $(window).resize(function() {
    resizeBlock();
  });

  $(document).ready(function() {
    resizeBlock();
  });

  function wResize() {
    $("header").css("min-height", $(window).height());
  }
  wResize();
  $(window).resize(function() {
    wResize();
  });

  // HeadHeSive Menu

  var options = {
    offset: 780
  };

  var header = new Headhesive(".menu", options);

  // Scroll To Id

  $(".menu ul li > a, a[href='home'],a").mPageScroll2id({
    offset: 50
  });
});

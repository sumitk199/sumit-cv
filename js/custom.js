$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});
$(document).ready(function () {
  $(".projects ul").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    // nextArrow: '<button class="slide-arrow next-arrow"></button>',
  });
});
$(document).ready(function () {
  setTimeout(function () {
    $("#container").addClass("loaded");
    // Once the container has finished, the scroll appears
    if ($("#container").hasClass("loaded")) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $("#preloader")
        .delay(9000)
        .queue(function () {
          $(this).remove();
        });
    }
  }, 3000);
});
$(document).ready(function () {
  $(".get-in-touch").click(function () {
    $(".popup-wrapper").fadeIn(500);
    $(".popup-overlay").fadeIn(500);
  });
  $(".popup-close").click(function () {
    $(".popup-wrapper").fadeOut(500);
    $(".popup-overlay").fadeOut(500);
  });
});
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault(); // prevent the default anchor behavior

  // Submit the form
  document.getElementById("myForm").submit();
});

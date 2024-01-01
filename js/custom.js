// tap to scroll
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

// slides
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

// loader
let loader = document.getElementById("preloader");
function myPreloderFunction() {
  loader.style.display = "none";
}

//scroll header
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".h-bg");
//     $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   });
// });

//Tap to scroll top
// const button = document.querySelector(".T-T-S-btn");

// const displayButton = () => {
//   window.addEventListener("scroll", () => {
//     console.log(window.scrollY);

//     if (window.scrollY > 100) {
//       button.style.display = "block";
//     } else {
//       button.style.display = "none";
//     }
//   });
// };

// const scrollToTop = () => {
//   button.addEventListener("click", () => {
//     window.scroll({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//     console.log(event);
//   });
// };

// displayButton();
// scrollToTop();

// text typing
var typed = new Typed(".text-type", {
  strings: ["Web Developer", "Front-end Developer"],
  typeSpeed: 500,
  backSpeed: 500,
  loop: true,
});

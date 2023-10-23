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
// $(document).ready(function () {
//   $(".projects ul").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
//     // nextArrow: '<button class="slide-arrow next-arrow"></button>',
//   });
// });

// loader
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

// $(document).ready(function () {
//   $(".get-in-touch").click(function () {
//     $(".popup-wrapper").fadeIn(500);
//     $(".popup-overlay").fadeIn(500);
//   });
//   $(".popup-close").click(function () {
//     $(".popup-wrapper").fadeOut(500);
//     $(".popup-overlay").fadeOut(500);
//   });
// });

//scroll header
$(function () {
  $(document).scroll(function () {
    var $nav = $("header");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//Tap to scroll top
const button = document.querySelector(".T-T-S-btn");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(event);
  });
};

displayButton();
scrollToTop();

// slider front end developer

// var words = ["Front End Developer", "Develop unique websites"],
//   part,
//   i = 0,
//   offset = 0,
//   len = words.length,
//   forwards = true,
//   skip_count = 0,
//   skip_delay = 15,
//   speed = 70;
// var wordflick = function () {
//   setInterval(function () {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     } else {
//       if (offset == 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       } else {
//         offset--;
//       }
//     }
//     $(".word").text(part);
//   }, speed);
// };

// $(document).ready(function () {
//   wordflick();
// });

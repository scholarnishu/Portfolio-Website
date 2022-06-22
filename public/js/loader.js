$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true, height: 420 });
  $("#portfolio").slider({ full_width: true, height: 220 });
  $(".carousel").carousel();
});

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$(".js-input").keyup(function () {
  if ($(this).val()) {
    $(this).addClass("not-empty");
  } else {
    $(this).removeClass("not-empty");
  }
});

$(".carousel-slider").carousel(
  { fullWidth: true, padding: 0 },
  setTimeout(autoplay, 4500),
);
function autoplay() {
  $(".carousel").carousel("next");
  setTimeout(autoplay, 7500);
}

autoplay();
function autoplay() {
  $(".carousel").carousel("next");
  setTimeout(autoplay, 3500);
}

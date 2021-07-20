$(window).scroll(function () {
  if ($(this).scrollTop() > 180) {
    $("#header").addClass("header-color");
  } else {
    $("#header").removeClass("header-color");
  }
});

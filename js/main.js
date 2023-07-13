$(function () {
  if (window.location.href.indexOf("index") !== -1) {
    $(".Gnb .drop_nav li.fr_load").addClass("nav_on");
  }

  $(".Header .Gnb .drop_nav li").on("click", function () {
    $(this)
      .addClass("nav_on")
      .siblings()
      .removeClass("nav_on")
      .closest(".Gnb")
      .find(".list")
      .not($(this).closest(".list"))
      .find("li")
      .removeClass("nav_on");
  });
});

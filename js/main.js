$(document).ready( () => {
  function expandHamburgerMenu() {
    $("#nav").addClass("change");
    $("#small-nav").removeClass("hidden");
  };
  function collapseHamburgerMenu() {
    $("#nav").removeClass("change");
    $("#small-nav").addClass("hidden");
  };
  function toggleHamburgerMenu() {
    $("#nav").toggleClass("change");
    $("#small-nav").toggleClass("hidden");
  };

  $(".nav-link").click(collapseHamburgerMenu);

  function changeNavToText() {
    $("nav").html("<a class=\"nav-link\" href=\"#about\">about<a> " +
                  "<a class=\"nav-link\" href=\"#portfolio\">portfolio</a> " +
                  "<a class=\"nav-link\" href =\"#contact\">contact</a>");
  };

  function changeNavToHamburger() {
    $("nav").html("<div id=\"hamburger\">" +
                    "<div class=\"bar1\"></div>" +
                    "<div class=\"bar2\"></div>" +
                    "<div class=\"bar3\"></div>" +
                  "</div>");
    $("#hamburger").click(toggleHamburgerMenu);
  }

  function setNavMode()
  {
    if ($(window).width() > 700)
        {
            changeNavToText();
            collapseHamburgerMenu();
        }
    else changeNavToHamburger();
  };

  setNavMode();
  window.onresize = setNavMode;
});
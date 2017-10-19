$(document).ready( () => {
  function expandHamburgerMenu() {
    $("#header-nav").addClass("change");
    $("#small-nav").removeClass("hidden");
  };
  function collapseHamburgerMenu() {
    $("#header-nav").removeClass("change");
    $("#small-nav").addClass("hidden");
  };
  function toggleHamburgerMenu() {
    $("#header-nav").toggleClass("change");
    $("#small-nav").toggleClass("hidden");
  };

  $(".nav-link").click(collapseHamburgerMenu);

  function changeNavToText() {
    $("#header-nav").html("<a class=\"nav-link\" href=\".\\..\\index.html#about\">about<a> " +
                  "<a class=\"nav-link\" href=\".\\..\\index.html#portfolio\">portfolio</a> " +
                  "<a class=\"nav-link\" href =\".\\..\\index.html#contact\">contact</a>");
  };

  function changeNavToHamburger() {
    $("#header-nav").html("<div id=\"hamburger\">" +
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
function myFunction() {
  $("#nav").toggleClass("change");
  $("#small-nav").toggleClass("hidden");
  //console.log($("#small-nav").attr("class"));
};

function changeNavToText() {
  $("nav").html("<a class=\"nav-link\" href=\"#about\">about<a> <a class=\"nav-link\" href=\"#portfolio\">portfolio</a> <a class=\"nav-link\" href =\"#contact\">contact</a>");
};

function changeNavToHamburger() {
  $("nav").html("<div class=\"hamburger\" onclick=\"myFunction(this)\"><div class=\"bar1\"></div><div class=\"bar2\"></div><div class=\"bar3\"></div></div>");
}

function myFunction3()
{
  if ($(window).width() > 700)
      {
          changeNavToText();
          console.log($("#small-nav").is("hidden"));
          if ($("#small-nav").attr("class")==="outer")
          {
              myFunction();
          }
      }
  else changeNavToHamburger();
};

myFunction3;
window.onresize =  myFunction3;
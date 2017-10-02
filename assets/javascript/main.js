//Menu Mobile

var menuMobile = document.getElementById("header");

var opened = false;

var openMenu = document.getElementById("button-open");
var closeMenu = document.getElementById("button-close");

window.addEventListener('resize', function () {
  var w = window.outerWidth;
  if (w > 800 && openMenu) {
    menuMobile.classList.remove("is-open");
  }
});

openMenu.addEventListener("click", function() {
  opened = true;
  menuMobile.classList.add("is-open");
});

closeMenu.addEventListener("click", function() {
  opened = false;
  menuMobile.classList.remove("is-open");
});

//Cookies

var btnCookies = document.getElementById("btn-cookies");
var cookiesBar = document.getElementById("cookies-bar");

if (btnCookies) {
  btnCookies.addEventListener("click", function() {
    cookiesBar.classList.add('is-hidden');
  });
}

//Polyfill to object fit.

if ( ! Modernizr.objectfit ) {
  $('.Grid-item').each(function () {
    var $container = $(this),
        $fake,
        $img = $container.find('img'),
        imgUrl = $img.prop('src');
    if (imgUrl) {
      $fake = $('<div></div>');
      $fake.insertBefore($container.find('.overlay'));

      $fake
        .css('background-image', 'url(' + imgUrl + ')')
        .addClass("objectfit");

      $img.css('display', 'none');
    }
  });
}

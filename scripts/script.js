// JavaScript Document

//FAVICON
var icons = [
			"https://akidaniel.github.io/menucatalina/imagenes/favicons/apple-icon-180x180.png",
                "https://akidaniel.github.io/menucatalina/imagenes/favicons/favicon-32x32.png",
                "https://akidaniel.github.io/menucatalina/imagenes/favicons/favicon.ico",
            ];

            var idx = localStorage["favicon"];
            if (idx === undefined) {
                idx = 0;
            } else {
                idx = parseInt(idx);
            }

            localStorage["favicon"] = (idx + 1) % icons.length;

            var link = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'icon';
            link.href = icons[idx];
            document.getElementsByTagName('head')[0].appendChild(link);
//IDIOMAS
$(document).ready(function() {

var display = function(block_name) {
  $('.SUBTITULO, .menuitem, .descr, .listado, .destacado, .principal').css('display', 'none');
  $('#' + block_name).css('display', 'block');
  $('.' + block_name).css('display', 'block');


}

$('.UK').on('click', function() {
  display('LUK', $(this));
});

$('.ES').on('click', function() {
  display('LES', $(this));
});

$('.CT').on('click', function() {
  display('CAT', $(this));
});


$('.FR').on('click', function() {
  display('LFR', $(this));
});
});
//MENUS
$(document).ready(function() {

var display = function(block_name) {
  $('.menuitemcontainer, .menudevinos, .menudepostres').css('display', 'none');
  $('#' + block_name).css('display', 'block');
  $('.' + block_name).css('display', 'block');
}

$('.platos').on('click', function() {
  display('menuitemcontainer', $(this));
});

$('.vinos').on('click', function() {
  display('menudevinos', $(this));
});

$('.postres').on('click', function() {
  display('menudepostres', $(this));
});

});
//ZOOM DISH
$(document).ready(function() {
$('.dish-2, .dish-3').click(function() {
  $(this).toggleClass('expandish');
    $(this).siblings(".show").toggle();
	    $('.show').css('z-index', '11')

});

/*$('img').bind('contextmenu', function(e) {
    return false;
}); */

$('.dish-2, .dish-3').mouseleave(function() {
  $(this).removeClass('expandish');
	    $('.show').css('z-index', '0');
			    $('.show').css('display', 'none');

});


});
//HIDINGMENU
if (jQuery(window).width() < 900) {
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("cambiocontenido").style.bottom = "0rem";
  } else {
    document.getElementById("cambiocontenido").style.bottom = "-3.5rem";
  }
  prevScrollpos = currentScrollPos;
}
}
//ALERGENOS
$(document).ready(function() {

var display = function(alerglang) {
  $('.LESa, .LUKa, .LFRa, .CATa').css('display', 'none');
  $('.' + alerglang).css('display', 'flex');


}

$('.UK').on('click', function() {
  display('LUKa', $(this));
});

$('.ES').on('click', function() {
  display('LESa', $(this));
});

$('.CT').on('click', function() {
  display('CATa', $(this));
});


$('.FR').on('click', function() {
  display('LFRa', $(this));
});
});











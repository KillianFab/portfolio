/* Start onevent listeners */
$(document).ready(function () {
	$('.modal').modal();
	$('.carousel').carousel();
	$(".button-collapse").sideNav();
	$(window).on('scroll', function () {
		checkScroll()
	});
	$("html").on("click", "body.tight .main-wrap", function () {
		$('html, body').animate({
			scrollTop: $('.main-wrap').outerHeight() - $(window).height()
		}, 500);
	});
	checkScroll();
	$('.parallax').parallax();
})

function checkScroll() {
	if ($(window).scrollTop() + $(window).height() > $('.main-wrap').outerHeight() + 500) {

		if (window.crate) crate.hide()
		if ($(window).width() > 993) {
			$('body').addClass('tight');
			$('.side-nav').addClass('dn');
		}
	} else {
		if (window.crate) crate.show()
		if ($(window).width() > 993) {
			$('body').removeClass('tight');
			setTimeout("$('.side-nav').removeClass('dn');", 300);
		}
	}
}
/* Enable the header transparency effect */
var header = $("nav");
if (!$("body").hasClass("no-header")) {
	$(window).scroll(function () {
		setTimeout('header.addClass("transition");', 100);
		var scroll = $(window).scrollTop();
		if (scroll >= 15) {
			header.addClass("block");
		} else {
			header.removeClass("block");
		}
		scrollTop: $(window).scrollTop() - 100;
	});
};


var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Salut !')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Développeur Full Stack')
    .pauseFor(1500)
    .deleteChars(10)
    .start();

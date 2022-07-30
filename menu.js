$(document).ready(main);

var contador = 1;
function main() {
	$(".menu__nav").toggle();

	$(".menu__button").click(function () {
		$(".menu__nav").toggle();
	});
}

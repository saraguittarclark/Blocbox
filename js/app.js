var main = function () {
	$('.drop-view').hide();
    $('.drop-view').click(function() {
        $('.view').toggle();
    });
};

$(document).ready(main);


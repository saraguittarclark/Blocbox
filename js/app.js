// var main = function () {
// 	$('.drop-view').hide();
//     $('.drop-view').click(function() {
//         $('.view').toggle();
//     });
// };

// $(document).ready(main);

$(document).ready(function() {
	$(".drop-view").hide();
    $(".view").on("click", function() {
  		$(".drop-view").show();
	});
});


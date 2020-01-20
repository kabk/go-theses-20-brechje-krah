
window.onload = function() {

$(".popup").click(function(){
	// hide the popup
	$('.popup').hide();
});

$(".popup-item").click(function(){

  var imagesrc = $(this).attr("src");

  $('.popup img').attr("src", imagesrc );

  $('.popup').show();

});
};

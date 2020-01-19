
window.onload = function() {

// activate the close button
$(".close-button").click(function(){
	// hide the popup
	$('.popup').hide();
});

/* BVB when you click the popup it closes */
$(".popup").click(function(){
	// hide the popup
	$('.popup').hide();
});

// when you click an image with class popup-item
$(".popup-item").click(function(){
  // hide popup in case one is open
  // $('.popup').hide();
	// // get the id of the clicked menu item
	// var id = $(this).attr('id');
  // // use it to open the connected popup
	// $("#popup-" + id).show();

  // BVB get the image src of the clicked image
  var imagesrc = $(this).attr("src");

  // BVB pass it to the image in the popup
  $('.popup img').attr("src", imagesrc );

  // BVB show the popup
  $('.popup').show();

});
};

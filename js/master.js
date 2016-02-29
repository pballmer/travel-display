var captions = {
	assets/stanford1.jpg = "Having a ton of fun at the Stanford bball game!",
	assets/stanford1.jpg = "Having a ton of fun at the Stanford bball game!",
	assets/stanford1.jpg = "Having a ton of fun at the Stanford bball game!",
	assets/stanford1.jpg = "Having a ton of fun at the Stanford bball game!",
	assets/stanford1.jpg = "Having a ton of fun at the Stanford bball game!",
	assets/stanford1.jpg = "Having a ton of fun at the Stanford bball game!",
	assets/stanford1.jpg = "Having a ton of fun at the Stanford bball game!",
	assets/stanford1.jpg = "Having a ton of fun at the Stanford bball game!",
}
$('.photo-tile').click(function(){
	$("#photo-details-photo").attr('src', $($(this)[0]).attr("src"));
	document.getElementById("caption-text").innerHTML = "New text!";
	$(".photo-details").removeClass('photo-details-hidden');
});

$(".photo-details-close").click(function(){
	$('.photo-details').addClass('photo-details-hidden');
});

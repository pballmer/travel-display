var captions = {
	stanford1 : "Having a ton of fun at the Stanford bball game!",
	stanford2 : "Stanford's cactus garden is incredible!",
	stanford3 : "Jchillin @ hanahaus #coffee",
	stanford4 : "#MainQuad #Mondays",
	stanford5 : "Amazing concert at Bing",
	stanford6 : "Mmmm fish!",
	stanford7 : "Ahhhh not ready to graduate!",
	stanford8 : "Put me in coach #BetterThanHogan",
	stanford9 : "The real golden arches #MainQuad",
	stanford10 : "Whew! Stanford Dish is a hell of a run",
	stanford11 : "Doing some research #Artsy",
	stanford12 : "Deeeeeeeep in thought"
}
$('.photo-tile').click(function(){
	$("#photo-details-photo").attr('src', $($(this)[0]).attr("src"));
	var fileName = $("#photo-details-photo").src;
	var fileNameIndex = fileName.lastIndexOf("/") + 1;
	var dotIndex = fileName.lastIndexOf(".");
	var captionName = fileName.substr(fileNameIndex, dotIndex);
	document.getElementById("caption-text").innerHTML = captions[captionName];
	$(".photo-details").removeClass('photo-details-hidden');
});

$(".photo-details-close").click(function(){
	$('.photo-details').addClass('photo-details-hidden');
});

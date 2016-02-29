$('.photo-tile').click(function(){
	$("#photo-details-photo").attr('src', $($(this)[0]).attr("src"));
	$(".photo-details").removeClass('photo-details-hidden');
});

$(".photo-details-close").click(function(){
	$('.photo-details').addClass('photo-details-hidden');
});
$("a.positions").on( "click", function( event ) {
	var button = $(event.target);
	var icon = $(button).children('i');
	var jbBlock = $(event.target).closest("div.jb-block");
	var positions = jbBlock.children('div.job-positions');
	var hidden = positions.css('display');

	if (hidden == "none") {
		$('div.job-positions').hide();
		positions.fadeIn();
		icon.addClass('glyphicon-chevron-down');
		icon.removeClass('glyphicon-chevron-up');
	} else {
		positions.fadeOut();
		icon.removeClass('glyphicon-chevron-down');
		icon.addClass('glyphicon-chevron-up');		
	}	
});
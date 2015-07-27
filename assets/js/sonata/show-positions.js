$("a.positions").on( "click", function( event ) {
	var click = $(event.target);
	var icon = click.is('a') ? $(click).children('i') : click;
	var jbBlock = $(event.target).closest("div.jb-block");
	var positions = jbBlock.children('div.job-positions');
	var hidden = positions.css('display');
	var allPositions = $('.all-positions');
	var icons = allPositions.find('i');

	if (hidden == "none") {
		$('div.job-positions').hide();
		$(icons).each(function() {
			$(this).removeClass('glyphicon-chevron-up');
		    $(this).addClass('glyphicon-chevron-down');		    
		});
		positions.fadeIn();
		icon.addClass('glyphicon-chevron-up');
		icon.removeClass('glyphicon-chevron-down');
	} else {
		positions.fadeOut();
		icon.removeClass('glyphicon-chevron-up');
		icon.addClass('glyphicon-chevron-down');		
	}	
});
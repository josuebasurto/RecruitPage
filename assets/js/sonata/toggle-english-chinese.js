// Toggle to English and back to Chinese
$("a.toggle-to-chinese").on( "click", function( event ) {
	var click = $(event.target);
	var jbBlock = click.closest("div.jb-block");
	var englishTexts = jbBlock.find(".english-text");
	var chineseTexts = jbBlock.find(".chinese-text");
	
	$(englishTexts).each(function() {
	    $(this).hide();
	});

	$(chineseTexts).each(function() {
	    $(this).show();
	});

});

$("a.toggle-to-english").on( "click", function( event ) {
	var click = $(event.target);
	var jbBlock = click.closest("div.jb-block");
	var englishTexts = jbBlock.find(".english-text");
	var chineseTexts = jbBlock.find(".chinese-text");
	
	$(englishTexts).each(function() {
	    $(this).show();
	});

	$(chineseTexts).each(function() {
	    $(this).hide();
	});

});
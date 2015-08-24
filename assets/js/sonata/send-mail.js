
$('#ss-form').submit(function(ev) {

	ev.preventDefault();

	var _name = $('#name').val();
	var _telephoneNumber = $('#telephoneNumber').val();
	var _message = $('#message').val();
	var _email = $('#email').val();
	var _subject = $('#subject').val();

	$.ajax({
		url : '../assets/php/send-mail.php',
		data: {
			name 			: _name,
			telephoneNumber	: _telephoneNumber,
			message			: _message,
			email			: _email,
			subject 		: _subject
		},
		type : 'POST',
		success : function(data){
			
			$(':input','#ss-form')
			.not(':button, :submit, :reset, :hidden')
			.val('')
			.removeAttr('checked')
			.removeAttr('selected');

			alert('The email was sent successfully');
		},
		error : function(data) {
			alert('There was an error when trying to send the email, please try again later');
		}
	});
});


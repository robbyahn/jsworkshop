$( document ).ready(function() {
	$( "a" ).click(function( event ) {
		event.preventDefault();
		$('#messageLabel').text("I just did something.");			            
	});
});
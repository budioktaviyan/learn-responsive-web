$(function() {
	$('.name').tooltip({
		track: true
	});

	$('.name').keyup(function(){
	// Get the actual value of the input that has changed
	var inputValue = $(this).val();

	// Get the id of the input that has changed
	var idInputChanged = "#" + $(this).attr('aria-describedby');

	// Go directly to the <div> inside the tooltip and change the text
	$(idInputChanged + ' div').html(inputValue);
	});
});
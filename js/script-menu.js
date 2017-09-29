$(document).ready(function() {
	

	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#shrink').addClass('shrink');
    }
    else {
    $('#shrink').removeClass('shrink');
    }
  });
});


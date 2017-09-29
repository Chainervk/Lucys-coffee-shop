$(document).ready(function() {
	 
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#header').addClass('shrink');
    }
    else {
    $('#header').removeClass('shrink');
    }
  });
});

$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
         });


function initMap() {
        var uluru = {lat: 45.812763, lng: 15.977263};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


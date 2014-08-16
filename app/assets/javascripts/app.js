$(window).scroll(function(event) {
	var topPosition = $(window).scrollTop();
	console.log(topPosition);

	if (topPosition >= 1540) {
		rotate(30);
	}

	if (topPosition >= 2406) {
		$("#bottom-wrapper .compare-1").addClass('animate-1');
		$("#bottom-wrapper .compare-2").addClass('animate-2');
		$("#bottom-wrapper .compare-3").addClass('animate-3');
	}

	if (topPosition < 2406) {
		$("#bottom-wrapper .compare-1").removeClass('animate-1');
		$("#bottom-wrapper .compare-2").removeClass('animate-2');
		$("#bottom-wrapper .compare-3").removeClass('animate-3');
	}

	function rotate (degrees) {
		console.log("hi");
		$(".color_wheel img").css({
		  '-webkit-transform' : 'rotate('+degrees+'deg)',
		     '-moz-transform' : 'rotate('+degrees+'deg)',  
		      '-ms-transform' : 'rotate('+degrees+'deg)',  
		       '-o-transform' : 'rotate('+degrees+'deg)',  
		          'transform' : 'rotate('+degrees+'deg)',  
		               'zoom' : 1
		});
	}
});


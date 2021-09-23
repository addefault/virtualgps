$(document).ready(function() {
	$('.tabs a').hover(function() {
		console.log('tt');
		$(this).addClass('active').siblings().removeClass('active');
		$('.tabs .hr').css('left', (100 / $('.tabs a').length * $(this).index())+'%');
	});
	$('input[type=password]').on('input', function() {
		if($(this).val().length>0)
			$(this).siblings('.password-control').addClass('active');
		else
			$(this).siblings('.password-control').removeClass('active');
	});
	$('.password-control').click(function(e) {
		e.preventDefault();
		if($(this).hasClass('active')) {
			$(this).toggleClass('view');
			if($(this).hasClass('view')) {
				$(this).siblings('input').attr('type', 'text');
			} else {
				$(this).siblings('input').attr('type', 'password');
			}	
		}
		
		
	});
});
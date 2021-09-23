$(document).ready(function() {
	if($(window).width() <= 768) {
		$('.steps-mobile').html($('.steps-nav p.active span').html());
	}
	$('.steps-nav p').click(function() {
		$(this).addClass('active').siblings('.active').removeClass('active');
		$('.steps-content img').eq($(this).index()).addClass('active').siblings('.active').removeClass('active');
		$('.steps .icon').removeClass('state0 state1 state2').addClass('state'+$(this).index());
		if($(window).width() <= 768) {
			$('.steps-mobile').html($('.steps-nav p.active span').html());
		}
	});
	
});
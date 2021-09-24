$(document).ready(function() {
	if($(window).width() <= 768) {
		$('.steps-mobile').html($('.steps-nav p.active span').html());
	}
	$('.steps-nav p').click(function() {
		$(this).removeClass('medium small').addClass('active').siblings('.active').removeClass('active');
		$('.steps-content img').eq($(this).index()).addClass('active').siblings('.active').removeClass('active');
		$('.steps .icon').removeClass('state0 state1 state2').addClass('state'+$(this).index());
		if($(window).width() <= 768) {
			$('.steps-mobile').html($('.steps-nav p.active span').html());
			if($(this).index() === 0) {
				$(this).next().removeClass('medium small').addClass('medium').next().removeClass('medium small').addClass('small');
			} else if($(this).index() === 1) {
				$(this).next().removeClass('medium small').addClass('medium');
				$(this).prev().removeClass('medium small').addClass('small');
			} else {
				$(this).prev().removeClass('medium small').addClass('medium').prev().removeClass('medium small').addClass('small');
			}
		}
	});
	
});
$(function () {
	$('.hiddenburger').click(function(){
		if (($('.hiddenlist')).css('display') == 'none') {
		$('.hiddenlist').show();
		$('.smth1').hide();
		}
		else {
			$('.hiddenlist').hide();
			$('.smth1').show();
		}
	})
})
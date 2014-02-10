$(document).ready(function() {
	//nth-child для ie7-8 для .best
	var bestLi = $('.best li');
	
	$(bestLi).filter(':nth-child(3n+1)').children('div').css('background', 'none');
	$(bestLi).filter(':nth-child(-n+3)').css('background', 'none');
});
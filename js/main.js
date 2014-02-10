window.onload = function () {

    defferentLevel();

};


$(document).ready(function() {

	$('.material-delete').click(function() {
	
		$(this).parents('tr').fadeOut(200);

	});


	$('.product-delete').click(function() {
	
		$(this).parents('.product-unit').fadeOut(200);

	});

	//Подсказка
	$('a[title]').poshytip({
		className: 'tip-twitter',
		alignTo: 'target',
		alignY: 'bottom',
		offsetX:-145,
		offsetY: 33,
		showTimeout: 50
	});

	//Вспомогательное меню

	$('#category').each(function() {

		var menu = $(' > ul > li', this);

		var block = false;	

		

		$(menu).children('a').click(function() {

			if(block) return false;

			

			if($(this).next().is('ul')) {

				block = true;

				

				$(this).next().slideToggle(400, function(){block = false});

				$(this).parent().siblings().children('ul').slideUp(400);

				

				$(this).parent().toggleClass('active')

					   .siblings().removeClass('active');		

				

				return false;

			} else {

				$(this).parent().siblings().removeClass('active').children('ul').slideUp(400);

			}

		});

	});

	

	//Слайдер

	$('.top_three').each(function(){

		var slider = this,

		slide = $('.slide li', slider),

		switcher = $('.switcher li', slider),

		block = false;

		

		$(slide).parent().height($(slide).filter('.active').outerHeight(true));

	

		$(switcher).click(function() {

			var root = $(this);

			

			if (block) return false;

			

			if($(slide).eq($(root).index()).is(':visible')) return false;

			

			block = true;

			

			$(slide).filter(':visible').fadeOut(400, function() {

				

				$(slide).eq($(root).index()).addClass('active').fadeIn(400)

						.siblings().removeClass('active');

						

				$(slide).parent().animate({

					height: $(slide).filter('.active').outerHeight(true)

				}, 400, function() {block = false;});

			});



			$(this).addClass('active').siblings().removeClass('active');

		});

		

		var rand = 0.5 + Math.random()*(3);

		rand = Math.round(rand);

		

		$(switcher).eq(rand).click();

	});



});


	//Вывод случайного рейтинга

function defferentLevel () {

        $('.statistics-level').each(function (i, el) {

            var val = $(this);

            var random = Math.random()*400;

            val.css('width', random)

        });
    }

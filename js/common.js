
$('.clients-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
});

$('.materials-slider').slick({
	slidesToShow: 3,
	appendArrows: '.materials-slider-nav',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
	responsive: [{
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
		}
	}
	]
});


if ($('.materials-slider').length !== 0) {
	$('.materials-slider').not('.slick-initialized').slick({
		slidesToShow: 3,
		appendArrows: '.materials-slider-nav',
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});
}

$('.reviews-slider').slick({
	slidesToShow: 5,
	appendArrows: '.reviews-slider-nav',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
	responsive: [{
		breakpoint: 992,
		settings: {
			slidesToShow: 4,
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 2,
		}
	}
	]
});



// fixed footer 
$(document).ready(function () {
	$('.footer-wrapper').before('<div class="block-footer-height"></div>');
	$('.block-footer-height').matchHeight({
		target: $('.footer-wrapper')
	});
})


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

$('.certificates-slider').slick({
	slidesToShow: 5,
	appendArrows: '.certificates-slider-nav',
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
	}]
})

$('.reviews-pride-slider').slick({
	slidesToShow: 3,
	dots: true,
	appendDots: '.reviews-pride-slider-nav',
	appendArrows: '.reviews-pride-slider-nav',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
	responsive: [{
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
		}
	}]
});

$('.projects-slider-preview').slick({
	slidesToShow: 3,
	vertical: true,
	arrows: false,
	focusOnSelect: true,
	asNavFor: '.projects-slider-max'
});

$('.projects-slider-max').slick({
	slidesToShow: 1,
	fade: true,
	asNavFor: '.projects-slider-preview',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-link"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-link"></use></svg></button>',
});

// показать скрытые блоки видео
$('.btn-load-video').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.video-wrapper').find('.video-frame:hidden').slice(0, 2).fadeIn();

	var onBlock = $(this).prev('.video-wrapper').find('.video-frame:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.btn-load-projects').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.block_hover').find('.projects-card-col:hidden').slice(0, 3).fadeIn();

	var onBlock = $(this).parents('.block_hover').find('.projects-card-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

// fixed footer 
$(document).ready(function () {
	$('.footer-wrapper').before('<div class="block-footer-height"></div>');
	$('.block-footer-height').matchHeight({
		target: $('.footer-wrapper')
	});
});

// header fixed
$(window).scroll(function () {
	var headerHeight = $('header').height();
	if ($(this).scrollTop() > headerHeight) {
		$('.header-fixed').addClass('active');
	} else {
		$('.header-fixed').removeClass('active');
	}
});


// btn search click
$('.header-bottom .btn-search').on('click', function () {
	$(this).toggleClass('active');
	$(this).parents('.header-bottom').find('.search-wrapper').fadeToggle();
	$(this).parents('.header-bottom').find('.search-wrapper input').focus();
});

$('.header-fixed .btn-search').on('click', function () {
	$(this).toggleClass('active');
	$(this).parents('.header-fixed').find('.search-wrapper').fadeToggle();
	$(this).parents('.header-fixed').find('.search-wrapper input').focus();
});

$('.search-wrapper .form-search input').on('keyup change', function () {
	if (this.value.length > 0) {
		$(this).parents('.search-wrapper').find('.search-wrapper-result').fadeIn();
	} else {
		$(this).parents('.search-wrapper').find('.search-wrapper-result').fadeOut();
	}
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});

// accordeon
function accordeon() {
	var panel = $('.panel_heading');

	if (panel.hasClass('in')) {
		$('.in').find('.block_hover').slideDown();
	}

	$('.panel_heading .block_title').on('click', function () {
		$(this).parent().toggleClass('in').find('.block_hover').slideToggle();
	});
}

accordeon();
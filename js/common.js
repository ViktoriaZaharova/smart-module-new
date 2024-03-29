$('[name="phone"]').mask('+7 (999)999-99-99');

// mobile menu
$('.btn-burger-mobile').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('click');
	$('.header-bottom').fadeToggle();
});

$(window).on('load resize', function () {
	if ($(window).width() < 768) {
		$(".dropdown-menu-catalog .dropdown-item").one("click", false);
	}
});

function setPositionNav() {
	if (window.innerWidth < 768) return;
	setTimeout(() => {
		const right = document.querySelector('.home-section .slick-active .main-ee-img').classList.contains('right')
		const nav = document.querySelector('.home-section .slider-main-nav')
		if (right) {
			nav.style.justifyContent = 'end'
		} else {
			nav.style.justifyContent = ''
		}
	}, 100)
}

$('.slider-main').slick({
	lazyLoad: 'ondemand',
	slidesToShow: 1,
	arrows: true,
	dots: true,
	fade: true,
	appendDots: '.slider-main-nav',
	appendArrows: '.slider-main-nav',
	prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-my" onclick="setPositionNav()"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-my" onclick="setPositionNav()"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
})

if ($(window).width() > 500) {

	var parFoneMobileArr = document.querySelectorAll(".slider-main-item__img-mobile");
	var parFonePcArr = document.querySelectorAll(".slider-main-item__img-pc");

	var parTextArr = document.querySelectorAll(".slider-main .par-text");
	var parNavArr = document.querySelectorAll(".slider-main-nav");


	function setTranslate(xPos, yPos, el) {
		el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
		el.style.transition = 'transform 0.1s linear'
	}

	window.addEventListener("DOMContentLoaded", scrollLoop, false);

	let xScrollPosition;
	let yScrollPosition;

	function scrollLoop() {
		xScrollPosition = window.scrollX;
		yScrollPosition = window.scrollY;

		let heightHeaderBottom = document.querySelector('.header-bottom').getBoundingClientRect().height;
		if (yScrollPosition >= (heightHeaderBottom + heightHeaderBottom * 0.5)) {
			yScrollPosition = yScrollPosition * 0.2
		} else {
			yScrollPosition = 0
		}

		parFoneMobileArr.forEach(item => setTranslate(0, yScrollPosition, item))
		parFonePcArr.forEach(item => setTranslate(0, yScrollPosition, item))
		parTextArr.forEach(item => setTranslate(0, yScrollPosition, item))
		parNavArr.forEach(item => setTranslate('-50%', yScrollPosition, item))

		requestAnimationFrame(scrollLoop);
	}
}


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
});

$('.certificates-sidebar-slider').slick({
	slidesToShow: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
});

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
	asNavFor: '.projects-slider-max',
	responsive: [{
		breakpoint: 576,
		settings: {
			vertical: false,
			slidesToShow: 3,
		}
	},
	{
		breakpoint: 480,
		settings: {
			vertical: false,
			slidesToShow: 2,
		}
	}]
});

$('.projects-slider-max').slick({
	slidesToShow: 1,
	fade: true,
	asNavFor: '.projects-slider-preview',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-link"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-link"></use></svg></button>',
});

$('.recommended-products-slider').slick({
	slidesToShow: 4,
	appendArrows: '.recommended-products-slider-nav',
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
	responsive: [{
		breakpoint: 992,
		settings: {
			slidesToShow: 3,
		}
	},
	{
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
	}]
});

$('.recommended-products-image-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
});

function paginationImageMouseEnter(element, notSlickGoTo = false) {
	if (!element || !$) return
	//console.log(element)
	const index = $(element).attr('data-index');
	const parent = $(element).closest('.product-slider')
	if (!notSlickGoTo) parent.find('.recommended-products-image-slider').slick('slickGoTo', index, true);
	parent.find('.product-pagination-image a').removeClass('active');
	$(element).addClass('active');
}


// $('.recommended-products-card__info').hover(function () {
// 	$(this).parents('.recommended-products-card').find('.recommended-products-card__hidden').fadeToggle();
// });

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
	if ($(this).scrollTop() > headerHeight + 100) {
		$('.header-fixed').addClass('active');
		$('.sidebar-catalog').removeClass('no-active');
	} else {
		$('.header-fixed').removeClass('active');
		$('.sidebar-catalog').addClass('no-active');
	}
});

// sidebar
$('.btn-filter').on('click', function (e) {
	e.preventDefault();
	$('.sidebar').fadeToggle();
});

$('.sidebar-close').on('click', function () {
	$('.sidebar').fadeOut();
});

// btn search click
$('.header-bottom .btn-search, .header-top .btn-search').on('click', function () {
	$(this).toggleClass('active');
	$(this).parents('header').find('.search-wrapper').fadeToggle();
	$(this).parents('header').find('.search-wrapper input').focus();
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

$(".slider-range1").slider({
	min: 0,
	max: 12,
	value: 8,
	animate: "fast",
	range: "min",
	slide: function (event, ui) {
		$(".dec1").val(ui.value);
	}
});

$(".dec1").val($(".slider-range1").slider("values", 0));


$(".slider-range2").slider({
	min: 0,
	max: 20,
	value: 6,
	animate: "fast",
	range: "min",
	slide: function (event, ui) {
		$(".dec2").val(ui.value);
	}
});

$(".dec2").val($(".slider-range2").slider("values", 0));

$(".slider-range3").slider({
	min: 0,
	max: 20,
	value: 6,
	animate: "fast",
	range: "min",
	slide: function (event, ui) {
		$(".dec3").val(ui.value);
	}
});

$(".dec3").val($(".slider-range3").slider("values", 0));

$(document).ready(function () {
	$(".js-tab-trigger").click(function () {
		var id = $(this).attr('data-tab'),
			content = $(this).parents('.tabs').find('.js-tab-content[data-tab="' + id + '"]');

		$(this).parents('.tabs').find('.js-tab-trigger.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2

		$(this).parents('.tabs').find('.js-tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});

});

$('.advantages-events-box__hidden .advantages-events-box, .advantages-events-box__close').on('click', function () {
	$(this).parents('.advantages-events-box__hidden').removeClass('active');
});

// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



// новый блог ->
// содержание
$('.article-menu__head').on('click', function () {
	$(this).closest('.article-menu').toggleClass('open');
	$(this)
		.closest('.article-menu')
		.find('.article-menu__body')
		.slideToggle(300);
});

$('.article-menu__toggle').on('click', function (e) {
	e.preventDefault();

	let parent = $(this).closest('.article-menu');

	if (parent.hasClass('full')) {
		$(this).text('Показать полностью');
		parent.removeClass('full');
		parent.find('.article-menu__head').trigger('click');
	} else {
		$(this).text('Скрыть');
		parent.addClass('full');
	}
});

// animate scroll
$(document).ready(function () { //плавный скролл
	$(".go_to").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		var headerHeight = $('header').height();
		$('body, html').animate({ scrollTop: top - headerHeight }, 500);
	});
});

$('.additional').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	vertical: true,
	variableWidth: false,
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1920,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				vertical: true
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				vertical: false
			}
		}
	]

});

$(window).on('load resize', function () {
	if ($(window).width() < 992) {
		$('.tab-product-category__col:not(.slick-initialized)').slick({
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-left"></use></svg></button>',
			nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="svg-icon"><use xlink:href="img/sprite.svg#angle-right"></use></svg></button>',
			asNavFor: '.tab-product-category-content'
		});
		$('.tab-product-category-content:not(.slick-initialized)').slick({
			fade: true,
			arrows: false,
			slidesToShow: 1,
			swipe: false,
		});
	} else {
		$(".tab-product-category__col.slick-initialized").slick("unslick");
		$(".tab-product-category-content.slick-initialized").slick("unslick");
	}
});

// amount
$('.down').on("click", function () {
	let $input = $(this).parent().find('input');
	let count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.up').on("click", function () {
	let $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});

// sidebar menu dropdown
$('.catalog-menu__list').click(function () {
	$('.catalog-menu__dropdown', this).toggleClass('active');
	$(this).toggleClass('active');
	$(this).find('.catalog-menu__link').toggleClass('active');
});

// product slider

$(document).ready(function () {
	var ranger = $('.product-detail-page .product-image input[type="range"]');
	var ranger2 = $('.big_range');
	var loop_change = false; //Стоп зацикливанию
	/**
	* 3D модель товара
	*/
	$('a.js-fullscreen').click(function (e) {
		e.preventDefault();
		$('.spritespinBig').spritespin('api').requestFullscreen();
	});

	//next slide
	$('#nextSlide').click(function (e) {
		e.preventDefault();
		$('.spritespinBig').spritespin('api').nextFrame();
		setTimeout(function () { $('.spritespinBig').spritespin('api').nextFrame(); }, 50);
		setTimeout(function () { $('.spritespinBig').spritespin('api').nextFrame(); }, 100);
		setTimeout(function () { $('.spritespinBig').spritespin('api').nextFrame(); }, 150);
		setTimeout(function () { $('.spritespinBig').spritespin('api').nextFrame(); }, 200);
		setTimeout(function () { $('.spritespinBig').spritespin('api').nextFrame(); }, 250);
		setTimeout(function () { $('.spritespinBig').spritespin('api').nextFrame(); }, 300);
	});

	//prew slide
	$('#prewSlide').click(function (e) {
		e.preventDefault();
		$('.spritespinBig').spritespin('api').prevFrame();
		setTimeout(function () { $('.spritespinBig').spritespin('api').prevFrame(); }, 50);
		setTimeout(function () { $('.spritespinBig').spritespin('api').prevFrame(); }, 100);
		setTimeout(function () { $('.spritespinBig').spritespin('api').prevFrame(); }, 150);
		setTimeout(function () { $('.spritespinBig').spritespin('api').prevFrame(); }, 200);
		setTimeout(function () { $('.spritespinBig').spritespin('api').prevFrame(); }, 250);
		setTimeout(function () { $('.spritespinBig').spritespin('api').prevFrame(); }, 300);
	});

	$('.spritespin').spritespin({
		source: 'img/d10f40b680488f97e72be1d985058c93.jpeg',
		width: 550,
		height: 400,
		frames: 30,
		framesX: 5,
		sense: -1,
		frameTime: 160,
		animate: false,
		reverse: false,
		loop: false,
		responsive: true,
		onLoad: function () {
			/**
			 * Слайдер положения 3Д картинки на странице товара
			 * Doc: http://rangeslider.js.org/
			 */
			ranger.rangeslider({
				polyfill: false,
				onSlide: function (position, value) {
					var api = $('.spritespin').spritespin('api');
					api.stopAnimation();
					api.updateFrame(value);
					loop_change = false;
				}
			});
		},
		onFrame: function (e, data) {
			ranger.val(data.frame);
			if (!loop_change) {
				loop_change = true;
				ranger.change();
			}
		}
	});
	$('.spritespinBig').spritespin({
		source: 'img/e6d7ff175ae9cd157db782d196b899d9.jpeg',
		width: 600,
		height: 400,
		frames: 30,
		framesX: 5,
		sense: -1,
		frameTime: 160,
		animate: false,
		reverse: false,
		loop: false,
		responsive: true,
		onLoad: function () {

			/**
			 * Слайдер положения 3Д картинки на странице товара
			 * Doc: http://rangeslider.js.org/
			 */

			$('.spritespinBig').css('display', 'block');
			$('.spritespinBig').append('<a href="#" class="h-callback neiros__open-lead-catch h-callback_new h-callback_in_sprite btn btn-green" data-bs-toggle="modal" data-bs-target="#callbackModal">Получить консультацию</a>');
			$('.spritespinBig').append('<ion-icon name="close" class="exit_fs"></ion-icon>');
			/*$('.spritespinBig').append('<div id="container_for_button"><div id="prewSlide"></div><input class="big_range" type="range" min="0" max="29" step="1" value="0" data-orientation="horizontal" /><div id="nextSlide"></div></div>');*/
			$('.h-callback_new').click(function (e) {
				e.preventDefault();
				document.exitFullscreen();
			});
			$('.exit_fs').click(function () {
				document.exitFullscreen();
			});

			ranger2.rangeslider({
				polyfill: false,
				onSlide: function (position, value) {
					var api = $('.spritespinBig').spritespin('api');
					api.stopAnimation();
					api.updateFrame(value);
					loop_change = false;
				}
			});
		},
		onFrame: function (e, data) {
			ranger2.val(data.frame);
			if (!loop_change) {
				loop_change = true;
				ranger2.change();
			}
		}

		//$('.spritespinBig').html($('.spritespinBig').html()+'<a href="#callback-fb" class="h-callback h-callback_in_sprite">Получить консультацию</a><a href="#" class="close_in_sprite">X</a>');


	});


	/*
	document.addEventListener('fullscreenchange', exitHandler);
	document.addEventListener('webkitfullscreenchange', exitHandler);
	document.addEventListener('mozfullscreenchange', exitHandler);
	document.addEventListener('MSFullscreenChange', exitHandler);

	function exitHandler() {
		if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
			$('.spritespinBig').css('cssText', 'display: none !important');
		}
	} */
});



$('#map-search').on('keyup', function () {

	$.ajax({
		type: "POST",
		url: "ajax/search.php",
		data: {
			city: $(this).val()
		},
		success: function (html) {
			$('#container').css('display', 'none');
			$('.city-block').css('display', 'block');
			$('.city-block').html(html);
		}
	});
	$('#select-city-fo-map .p-popup__title span').html('Выберите свой город');
	$('#select-city-fo-map .back-to-map').css('display', 'block');

})


$(document).on('click', '.all-region-mobile span', function () {

	$.ajax({
		type: "POST",
		url: "ajax/search.php",
		data: {
			region: $(this).html()
		},
		success: function (html) {
			$('#container').css('display', 'none');
			$('.city-block').css('display', 'block');
			$('.city-block').html(html);
			$('#select-city-fo-map .p-popup__title span').html('Выберите свой город');
			$('#select-city-fo-map .back-to-map').css('display', 'block');
		}
	});

})


$('.back-to-map').on('click', function () {
	$('.city-block').css('display', 'none');
	$('#select-city-fo-map .p-popup__title span').html('Выберите свой регион на карте');
	$('#container').css('display', 'block');
	$('#select-city-fo-map .back-to-map').css('display', 'none');

})
scale = 600;
if ($(window).width() <= 768) {
	$('#select-city-fo-map .p-popup__title span').html('Выберите свой регион');
	$('.back-to-map').html('К выбору региона');
	$.ajax({
		type: "POST",
		url: "ajax/search.php",
		data: {
			allregion: ''
		},
		success: function (html) {
			$('#container').html(html);
		}
	});
}

function start_map() {

	if ($(window).width() >= 1024) {
		console.log($('#container').html());
		if ($('#container').html() === '') {
			var width = $('#container').width(),
				height = $('#container').height();

			//basic map config with custom fills, mercator projection
			var map = new Datamap({
				scope: 'rus',
				element: document.getElementById('container'),
				responsive: true,
				setProjection: function (element) {
					var projection = d3.geo.albers()
						.rotate([-105, 0])
						.center([-10, 65])
						.parallels([52, 64])
						.scale(scale)
						.translate([width / 2, height / 2]);
					var path = d3.geo.path()
						.projection(projection);

					return {
						path: path,
						projection: projection
					};
				},
				fills: {
					defaultFill: '#E0E0E0',
					lt50: 'rgba(0,244,244,0.9)',
					gt50: 'red'
				},

				data: {
					'071': {
						fillKey: 'lt50'
					},
					'001': {
						fillKey: 'gt50'
					}
				},
				geographyConfig: {
					highlightFillColor: '#638FC1',
					highlightBorderColor: 'rgba(245, 245, 245, 0.2)'
				},
				done: function (datamap) {
					datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
						//geography.properties.name

						$.ajax({
							type: "POST",
							url: "/include/ajax/search.php",
							data: {
								region: geography.properties.name
							},
							success: function (html) {
								$('#container').css('display', 'none');
								$('.city-block').css('display', 'block');
								$('.city-block').html(html);
								$('#select-city-fo-map .p-popup__title span').html('Выберите свой город');
								$('#select-city-fo-map .back-to-map').css('display', 'block');
							}
						});
					});
				}
			});

			window.addEventListener('resize', function (event) {
				map.resize();
			});
		}
	}
}
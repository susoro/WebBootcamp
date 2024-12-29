$(function(){

	$('#header #gnb').mouseenter(function(){
		$('#header').addClass('ov');
	});

	$('#header #gnb').mouseleave(function(){
		$('#header').removeClass('ov');
	});

	$('.btn_all_menu').on('click',function(e){
		e.preventDefault();
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.amDim').fadeOut(200);
			$('#header').removeClass('fff');
			$('.allMenuWrap').removeClass('active');

			/*$.fn.fullpage.setMouseWheelScrolling(true);
			$.fn.fullpage.setAllowScrolling(true);

			$('html, body').css({
				overflow: 'auto',
				height: 'auto'
			});*/
		}else{
			$(this).addClass('on');
			$('#header').addClass('fff');
			$('.amDim').fadeIn(200);
			$('.allMenuWrap').addClass('active');
			/*$.fn.fullpage.setMouseWheelScrolling(false);
			$.fn.fullpage.setAllowScrolling(false);

			$('html, body').css({
				overflow: 'hidden',
				height: '100%'
			});*/
		}
	});
	$('#header').addClass('load');

	$(window).on('load',function(){
		$('#header').addClass('load');
	});

	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return elementBottom > viewportTop + 80 && elementTop < viewportBottom -80;
	};


	$.fn.isInViewport2 = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return elementBottom > viewportTop + 120 && elementTop < viewportBottom -120;
	};


	$(window).on('load resize scroll',function(){
		if($('.subVisual').outerHeight()){
			if($(this).scrollTop() > $('.subVisual').outerHeight() - $('#header').outerHeight() ){
				$('#header').addClass('active');
			}else{
				$('#header').removeClass('active');
			}
		}

	});


	$(window).on('load resize',function(){
		if($(this).width() > 1100){
			$('.allMenu .dep2 ').show();
		}

		$('.mvWrap .mv_item, .mainProd .mp_item, .allMenuWrap, .amDim').height($(this).height());


	});

	$('.allMenu > li > p').on('click',function(){
		if($(this).parent().hasClass('active')){
			$(this).next('.dep2').slideUp(200).parent().removeClass('active');
		}else{
			$(this).next('.dep2').slideDown(200).parent().addClass('active').siblings().removeClass('active').find('.dep2').slideUp(200);
		}

	});

	$('#header  .lang > a').on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('on');
	});


	var win = $(window);


});


/*family site*/
jQuery(function($){
	$('.familysite a.list').click(
		function() {
			$(this).next('div').toggle();
			$(this).toggleClass('hide');
			return false;
	});
});


//var c = 0;
function Loop_ani (_init, duration, _target) { //  create a loop function
	var _target = $(_target);
	timer = setTimeout(function () {
		$(_target).children().eq(_init).addClass('active');
		_init++;
		if (_init < $(_target).children().length) {
			Loop_ani(_init, duration, _target);
		} else {
			clearTimeout(timer); // clear timeout
			_target.addClass('ani_finished');
		}
		//console.log(c);
	}, duration);
}



/* *********************** topMenu ************************ */
var dep1;
var dep2;
var dep3;

jQuery(function($){

	var $sub_prev_page_btn = $(".sub-prev-page-btn");
	var $sub_next_page_btn = $(".sub-next-page-btn");

	if (dep3) {
		var $dep3_menu = $(".menu-location.location2  > ul > li");
		var dep3_menu_lang = $dep3_menu.length;

		$sub_prev_page_btn.attr("href",$dep3_menu.eq(dep3-2).children("a").attr("href"));
		$sub_next_page_btn.attr("href",$dep3_menu.eq(dep3).children("a").attr("href"));


		if ( dep3 == dep3_menu_lang ) {
			$sub_next_page_btn.attr("href",$dep3_menu.eq(0).children("a").attr("href"));
		}else if ( dep3 == 1 ) {
			$sub_prev_page_btn.attr("href",$dep3_menu.eq(dep3_menu_lang-1).children("a").attr("href"));
		}
	}else {
		var $dep2_menu = $(".menu-location.location1  > ul > li");
		var dep2_menu_lang = $dep2_menu.length;

		$sub_prev_page_btn.attr("href",$dep2_menu.eq(dep2-2).children("a").attr("href"));
		$sub_next_page_btn.attr("href",$dep2_menu.eq(dep2).children("a").attr("href"));


		if ( dep2 == dep2_menu_lang ) {
			$sub_next_page_btn.attr("href",$dep2_menu.eq(0).children("a").attr("href"));
		}else if ( dep2 == 1 ) {
			$sub_prev_page_btn.attr("href",$dep2_menu.eq(dep2_menu_lang-1).children("a").attr("href"));
		}
	}

	$(".menu-location > .cur-location").click(function  () {
		//$(".menu-location .location-menu-con:visible").hide();
		$(this).toggleClass("open");
		$(this).siblings().slideToggle(500);
		return false;
	});
	$(".menu-location").mouseleave(function  () {
		if ( $(this).find(".location-menu-con").css("display") == "block" ) {
			$(this).find(".cur-location").removeClass("open");
			$(this).find(".location-menu-con").slideUp(500);
		}
	});
});

$(function  () {
		dep1 = 01,
		dep2 = 01;

		// sub2_num ������ ������ ( 3���޴� )
		dep3 = 01;

		if (dep1 > 0 && dep2 > 0) {
			$("#contentTopBox, #productVisualCon").addClass("active");
			$("#topMenu .menu-location.last-menu-location").children(".location-menu-con").remove();
		}

		if (dep1 == 1) {
			$("#topMenu").addClass("menu3");
		}

		if (dep1 == 3) {
			$("#topMenu").addClass("row2");
		}

		if (dep1 == 4 && dep2 == 2) {
			$("#topMenu").addClass("menu3");
		}

		if (dep1 == 5) {
			$("#topMenu, #contentInfoCon").remove();
			$("#middleArea").addClass("search");
		}
	})

/* *********************** topMenu FIXED ************************ */
jQuery(function($){
	$(window).scroll(function  () {
		var scrollHeight = $(window).scrollTop();
		var startTop = $("#topMenu").offset().top;
		if ( scrollHeight > startTop ) {
			$("#topMenu").addClass("fixed");
		}else {
			$("#topMenu").removeClass("fixed");
		}
	});
});



/* *********************** TAB ************************ */
$(document).ready(function () {

	$(".tab_content").hide();
	$(".tab_content:first").show();
	$("ul.tabs li:first").addClass("active");
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

	$(".tab_content02").hide();
	$(".tab_content02:first").show();
	$("ul.tabs02 li:first").addClass("active");
	$("ul.tabs02 li").click(function() {
		$("ul.tabs02 li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content02").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

});




		/***************레이어팝업****************/

		function layerPopup(objClass){
					 var left = ( $(window).scrollLeft() + ( $(window).width() - $('.'+objClass).width()) / 2 );
					 var top = ( $(window).scrollTop() + ( $(window).height() - $('.'+objClass).height()) / 2 );
					 $('.'+objClass).css({'left':left,'top':top, 'position':'absolute'});
					 $('.'+objClass).show();
			 }

			 $(document).ready(function(){
			 $('a[data-modal-class]').click(function(e){
				 var layerClass = $(this).attr('data-modal-class');
				 $('.maplayer').hide();
							 layerPopup( layerClass);
					 });

					 $('.layerClose').click(function (e) {
							 $(this).parent().parent().hide();
					 });
			 });

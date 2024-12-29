"use strict";
var winW,winH,winSc,htmlH,es_step="Expo.ease",$window=$(window),$container=$("#container");

$window.load(function(){
	htmlH=$("body").outerHeight(!0),
	winSc=$(this).scrollTop(),
	$window.on("resize",function(){winW=$(this).width(),winH=$(this).height()}),
	$(this).trigger("resize"),
	$(window).scroll(function(){winSc=$(this).scrollTop()}),
	scrollBg()
});

function scrollBg(){
	var o=$("#topBtn");
	/*상단이동*/$(window).scroll(function(){$(".pall_bg").each(function(){var o=$(this).offset().top,n=$(this).height(),i=(winSc-o)/n*100;$(this).css({"background-position-y":-i.toFixed(2)+"%"})}),winSc>htmlH-216-winH?o.addClass("fixed"):o.removeClass("fixed")}),o.click(function(){TweenMax.to($("html, body"),.3,{scrollTop:0,ease:es_step})});
	/*스크롤시 모션*/var n=$(".js-scr-sec"),s=[];!function(){function o(i){$.each(s,function(o,n){i>=n[1]&&void 0===n[0].motion&&(n[0].addClass("js-motion-end"),TweenMax.staggerTo(n[0].find(".js-scr-box"),.8,{y:0,opacity:1,ease:es_step},.2),n[0].motion=!0)})}$window.scroll(function(){o(winSc)}),n.each(function(){var o=$(this),n=o.offset().top-winH/2-350;s.push([o,n])}),o(winSc)}()
};

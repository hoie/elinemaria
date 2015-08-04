'use strict'

window.$ = window.jQuery = require('jquery');
var easing = require('jquery.easing');
var bootstrap = require('bootstrap-sass');
var WOW = require('wow');

//jQuery for page scrolling feature - requires jQuery Easing plugin

$('document').ready (function() {
    
    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeOutExpo');
        event.preventDefault();
    });

    // if ($(window).width() > '1024') {
    //     $(window).stellar();
    // }; 
});

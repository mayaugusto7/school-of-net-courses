$(document).ready(function() {

    $('#title').html('JQuery - School of Net');
    $('#desc').html('Starting with JQuery');

    $('#header').addClass('header btn btn-info');
    $('#header').removeClass('btn btn-info');
    $('#header').css('height', '60px');
    $('#header').css('padding', '10px');
    $('#title').css('margin-top', '0');
    $('#title').css('margin-bottom', '0');
    $('#desc').css('margin-top', '0');
    $('main').css('padding', '20px');

    $('main').append('<p id=test>Test slideDown, slideUp and slideToggle!</p>');
    $('main').append('<button id=downbtn>SlideDown</button>');
    $('main').append('<button id=upbtn>SlideUp</button>');
    $('main').append('<button id=togglebtn>SlideToggle</button>');
    $('#test').css('border', '1px solid green');
    $('#test').css('width', '600px');
    $('#test').css('height', '80px');
    $('#test').css('text-align', 'center');

    $('#downbtn').click(function() {
        $('#teste').slideDown();
    });

    $('#upbtn').click(function() {
        $('#teste').slideUp();
    });

    $('#upbtn').click(function() {
        $('#teste').slideToggle();
    });


});
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

    //append acrescenta um elemento apos o p 
    $('main').append('<h3> Test H3 Append - After</h3>');

    //prepend acrecenta um elemento antes do p 
    $('main').prepend('<h3> Test H3 Prepend - Before</h3>');

    $('main').append('<p id=test>Test Show, Hide and Toggle</p>');
    $('main').append('<button id=showbtn>Show</button>');
    $('main').append('<button id=hidebtn>Hide</button>');
    $('main').append('<button id=togglebtn>Toggle</button>');

    $('#showbtn').click(function() {
        $('#test').show();
    });

    $('#hidebtn').click(function() {
        $('#test').hide();
    });

    $('#togglebtn').click(function() {
        $('#test').toggle();
    });


});
$(document).ready(function() {

    $('#title').html('JQuery - School of Net');

    $('#desc').html('Starting with JQuery');

    //$('header').hide();
    //$('header').html('<h1>Title H1</h1>');

    $('#title').hide();
    $('h1').css('color', 'red');

    $('button').click(function() {
        $(this).css('color', 'red');
        $(this).hide();
    });
});
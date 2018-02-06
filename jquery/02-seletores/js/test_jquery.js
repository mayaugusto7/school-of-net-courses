$(document).ready(function() {

    $('#title').html('JQuery - School of Net');
    $('#desc').html('Starting with JQuery');

    var bird = $('#bird').html();
    $('#bird').html(bird + " in the sky");

    $('.classBird').css('color', 'orange');
    $('.classBird:first').css('color', 'red');
    $('.classBird:last').css('color', 'blue');

    $('div').html('Selector Div');
});
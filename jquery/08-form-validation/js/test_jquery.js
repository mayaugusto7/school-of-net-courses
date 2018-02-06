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

    /**
     * return false cancela o submit
     */
    $('form').submit(function() {

        var name = $(':input[name=name]').val();
        var email = $(':input[name=email]').val();
        var tel = $(':input[name=tel]').val();
        var term = $(':input[name=term]').is(":checked");

        var error = '';

        $('#errors').html(''); // limpa o elemento

        if (name === '') {
            error += '<p>Fill in a name!</p>';
        }

        if (email === '') {
            error += '<p>Fill in a email!</p>';
        }

        if (tel === '') {
            error += '<p>Fill in a tel!</p>';
        }

        if (!term) {
            error += '<p>Accept the terms!</p>';
        }

        if (error) {
            $('#errors').html(error);
            $('#errors').css('color', 'red');
            return false;
        }

        return true;
    });
});
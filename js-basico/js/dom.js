function validateNumber() {

    var number = document.getElementById('number_val').value;

    console.log(number);

    if (isNaN(number) || (number >= 1 && number <= 10)) {
        alert('input is not valid');
    } else {
        alert('input is valid');
    }
}

var clickMe = document.getElementById('click_me');

clickMe.addEventListener('click', fnClickMe);

function fnClickMe() {
    alert('You clicked Me!');
}

function over(obj) {
    obj.innerHTML = "Over me JS";
    obj.style.background = '#ffffff';
}

function out(obj) {
    obj.style.background = '#fff000';
    obj.color = '#CCC';
}

var input = document.getElementsByClassName('number_val_input');
var btn_generate = document.getElementById('generate_btn');

btn_generate.addEventListener('click', generate);

function generate() {

    var value = input[0].value;

    for (var i = 0; i < parseInt(value); i++) {

        var inpt = document.createElement('input');
        inpt.id = "btn_" + i;

        var body = document.getElementsByTagName('body');

        body[0].appendChild(inpt);
    }
}

var body2 = document.getElementsByTagName('body');
var select = document.createElement('select');

for (var i = 0; i < 10; i++) {
    var option = document.createElement('option');
    option.id = '#id_' + i;
    option.value = i;
    option.innerHTML = i;

    select.appendChild(option);
}

body2[0].appendChild(select);

var title = document.getElementById('h1');
title.style.color = '#fff000';
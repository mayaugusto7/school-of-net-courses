console.log('Hello World from external scripts');

var number = 0;
var number1 = 1;

console.log(typeof number);

number = "0" + number1;

console.log(number);
console.log(typeof number);

function myFunction() {
    var number = 0.1;
    console.log(number);
}

myFunction();

/**
 * Condicionais
 */

var age = prompt("How old are you?");

var ageParser = parseInt(age);

if (ageParser >= 18) {
    console.log('Idade: ' + age);
    console.log('You are authorized');
} else {
    console.log('Idade: ' + age);
    console.log('You are not authorized');
}

switch (true) {
    case (ageParser >= 18):
        console.log('Idade: ' + age);
        console.log('You are authorized');
        break;
    case (ageParser < 18):
        console.log('Idade: ' + age);
        console.log('You are not authorized');
        break;

    default:
        console.log('Default function');
        break;
}

/**
 * Repeticoes
 */

var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

for (var a = 0; a < 10; a++) {
    console.log(a);
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(function(value, key) {
    console.log(key + ' - ' + value);
});

for (var a = 0; a < ageParser; a++) {
    console.log(a);
}

/**
 * funcao normal
 */
function myFunction(name) {
    console.log('Nome=>', name);
}

myFunction('Maycon');

/**
 * funcao anonima auto-executavel sem parametro
 */
(function() {
    console.log('Função anonima automatica');
})();


/**
 * funcao anonima auto-executavel com parametro
 */
(function(name) {
    console.log(name);
})('Maycon');

/**
 * funcao nomeada auto-executavel sem parametro
 */
(function check() {
    console.log('Função nomeada automatica');
})();

/**
 * funcao nomeada auto-executavel com parametro
 */
(function ckeck(name) {
    console.log(name);
})('Maycon');

/**
 * funcao anonima com retorno de valores
 */
(function check(name) {
    return console.log(name);
})('Maycon');

/**
 * Contexto global dentro da funcao
 * Contexto global fora da funcao
 */

var prop = prompt('What is your name?');

function yourName(name) {
    return name + ' School Of Net';
}

console.log(yourName(prop));


/**
 * Objetos javascript primeira forma
 */

var prop1 = prompt('Model?');
var prop2 = prompt('Name?');
var prop3 = prompt('Color?');

var obj = {
    model: prop1,
    name: prop2,
    color: prop3
};

console.log(obj);
console.log(JSON.stringify(obj));

/**
 * Objetos javascript segunda forma
 */
prop1 = prompt('Model?');
prop2 = prompt('Name?');
prop3 = prompt('Color?');

obj = {};

obj.model = prop1;
obj.name = prop2;
obj.color = prop3;

console.log(obj);
console.log(JSON.stringify(obj));

/**
 * Objetos javascript terceira forma
 */
prop1 = prompt('Model?');
prop2 = prompt('Name?');
prop3 = prompt('Color?');

obj = {};

obj["model"] = prop1;
obj["name"] = prop2;
obj["color"] = prop3;

console.log(obj);
console.log(JSON.stringify(obj));
console.log(obj.model);

/**
 * Atribuir função/método para um objeto
 */

obj = {};

obj.start = function() {
    return 'I am ready';
};

console.log(obj);
console.log(obj.start());
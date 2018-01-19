/**
 * Forma complexa
 */
var ft = new Array(1, 2, 3, 4, 5);

/**
 * Forma simples
 */
var ft = [1, 2, 3, 4, 5];

var ft = [
    'Thiago',
    'Maycon',
    'Luiz',
    'Wesley',
    'Diego',
    'Rafael'
];

ft.unshift('Emanuel'); // adiciona um elemento na primeira posicao
ft.push('Joao'); // adiciona um elemento no fim do array

console.log(ft);

ft.pop(); //remove ultimo elemento do array

console.log(ft);

/**
 * Remocao de elementos do array
 */
//Remove Thiago
ft.slice(0, 1);

console.log(ft);

//Remove Maycon
ft.splice(1, 2);

console.log(ft);

var ft = [
    'Thiago',
    'Leonan',
    'Luiz'
];

var ft1 = ["Wesley"];

var concat = ft.concat(ft1);

console.log(concat);

var ft = [
    'Thiago',
    'Leonan',
    'Luiz'
];

//Imprime Thiago
console.log(ft[0]);
//Imprime Leonan
console.log(ft[1]);
//Imprime Luiz
console.log(ft[2]);

var ft = [
    'Thiago',
    'Leonan',
    'Luiz'
];

//Imprime índice de Thiago
console.log(ft.indexOf('Thiago'));
//Imprime índice de Leonan
console.log(ft.indexOf('Leonan'));
//Imprime índice de Luiz
console.log(ft.indexOf('Luiz'));
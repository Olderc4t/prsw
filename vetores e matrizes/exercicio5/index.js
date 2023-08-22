const readline = require('readline-sync');

/*Crie um programa capaz de armazenar números em uma matriz de 4
linhas por 4 colunas. Ao final da criação da matriz o programa deverá 
imprimir o número da linha e da coluna que contém o menor dentre todos 
os números lidos.*/

let m = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
];

let qtdex = 0;
let qtdey =  0;
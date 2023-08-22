const readline = require('readline-sync');

/*Crie um programa que receba 3 números do usuário, coloque-os em um 
array, depois exiba tal array. Modifique os elementos do array de modo a 
sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1*/

//forma mais que correta de fazer
/*
let v = new Array(2)

for(let i = 0; i <= 2; i++){
    v[i] = Number(readline.question("Escreva 3 numeros : "));
}

v.reverse()
console.log(v)
*/

//forma cabaça de fazer
const v = [];


for(let i = 0; i <= 2; i++){
    v[i] = Number(readline.question("Escreva o " + i + " numero : "));
}

let all = v[2];
v[2] = v[0]
v[0] = all


console.log(v)
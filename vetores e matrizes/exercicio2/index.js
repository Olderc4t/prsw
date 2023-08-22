const readline = require('readline-sync');

/*Refaça o programa anterior, mas agora pergunte ao usuário quantos 
números ele deseja inserir no array. Depois, o usuário vai preenchendo 
elemento por elemento do vetor. Ao final, exiba o array e o array ao 
contrário.*/

let c = parseInt(readline.question("Digite a quantidade de colunas : "));
let v = [];

var qtde = Math.floor(c / 2);

for(let cont = 0; cont < c ; cont++){
    v[cont] = readline.question("Digite o " + cont + " valor : ");   
}

let cont = 0;
let last = c - 1;

for(let i = 1; i <= qtde; i++){
    aux = v[last];
    v[last] = v[cont]
    v[cont] = aux
    cont++
    last--
}

console.table(v)

/*
while(cont < c){
    v[cont] = readline.question("Difite o " + cont+1 + " *valor");
    cont++
}
*/
/*
do{
    v[cont] = readline.question("Difite o " + cont+1 + " *valor");
    cont++
}while(cont < c)
*/

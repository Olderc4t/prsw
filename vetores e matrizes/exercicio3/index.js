const readline = require('readline-sync');

/*
Criar um vetor A com 8 elementos inteiros. Construir um vetor B de 
mesmo tipo e tamanho e com os elementos do vetor A multiplicados por 2, 
ou seja: B[i] = A[i] * 2.
*/

let a = []
let b = []
let cont  = 0


while(cont < 8){
    a[cont] = parseInt(readline.question("digite um valor : "))
    cont++
}

for(let i = 0; i < 8; i++){
    b[i] = a[i] * 2
}



console.log(a)
console.log(b)
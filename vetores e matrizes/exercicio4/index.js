const readline = require('readline-sync');

/*
Criar dois vetores A e B cada um com 10 elementos inteiros. Construir um 
vetor C, onde cada elemento de C é a soma dos respectivos elementos em A 
e B, ou seja: C[i] = A[i] + B[i].
*/

let a = []
let b = []
let c = []
let cont  = 0


while(cont < 10){
    a[cont] = parseInt(readline.question("digite um valor A : "))
    b[cont] = parseInt(readline.question("digite um valor B : "))
    c[cont] = a[cont] + b[cont]
    cont++
}

console.log(c)
let num = [8, 1, 7, 4, 2, 9];

console.log(`-------------------------`);
console.log(`ARRAY/VETOR COMUM`);
for(let pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

console.log(`-------------------------`);
console.log(`ARRAY/VETOR SIMPLIFICADO EM CÓDIGO`);
for(let pos in num){ //PARA CADA POSIÇÃO DENTRO(IN) DO ARRAY NUMERO FAÇA... (FUNCIONA APENAS PARA ARRAY OU OBJETO)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
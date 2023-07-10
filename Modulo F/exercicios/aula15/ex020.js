let num = [3, 4, 8, 6, 9, 1];

console.log(`Nosso vetor é ${num}.`);
console.log(`O veto tem ${num.length} posições.`);
console.log(`O valor do elemento 0 é: ${num[0]}.`);
console.log(`Adicionando o valor 5 no ultimo elemento ${num.push(5)}.`);
console.log(`Nosso vetor com o valor inserido agora é: ${num}.`);
console.log(`A posição ${num.indexOf(8)} está com o valor 8`);
console.log(`O valor 2 não existe, portanto o resultado de posição para o JavaScript é ${num.indexOf(2)} `);
console.log(`O vetor ordenado é: ${num.sort()}.`);
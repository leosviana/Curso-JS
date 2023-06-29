//EXERCICIO 013 - CONDIÇÃO MULTIPLA
var agora = new Date();
var diaSem = agora.getDay(); //1 - segunda, 2 - terça, 3 - quarta, 4 - quinta, 5 - sexta, 6 - sabado, 7 - domingo

// diaSem = 8 //TESTE ALTERANDO DATA MANUALMENTE
console.log(diaSem);
switch (diaSem){
    case 1:
        console.log('Segunda')
    break;
    case 2:
        console.log('Terça')
    break;
    case 3:
        console.log('Quarta')
    break;
    case 4:
        console.log('Quinta')
    break;
    case 5:
        console.log('Sexta')
    break;
    case 6:
        console.log('Sabado')
    break;
    case 7:
        console.log('Domingo')
    break;
    default:
        console.log('[ERRO] Dia inválido');
        break;
}
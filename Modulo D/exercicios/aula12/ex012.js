//EXERCICIO 012 - CONDIÇÃO ANINHADA
//DATA E HORA

var agora = new Date(); //DATA E HORA CAPTURADA DO LADO DO SERVIDOR
var horas = agora.getHours(); //RETIRAR SOMENTE AS HORAS DA VARIAVEL CAPTURADA

console.log(`Agora são exatamente ${horas} horas`);

if(horas < 12){
    console.log(`Bom dia!`);
}else if(horas <= 18){
    console.log(`Boa tarde`);
}else{
    console.log(`Boa noite!`)
}
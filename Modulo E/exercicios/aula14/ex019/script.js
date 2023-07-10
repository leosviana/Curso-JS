function calcular(){
    let num = window.document.getElementById('tabuada');
    let tab = window.document.getElementById('seltab');

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!');
    }
    else{
        let n = Number(num.value); //TRANSFORMANDO VARIAVEL EM NUMERO
        tab.innerHTML = ''; //LIMPAR CAMPO ANTES DE MOSTRAR O PROXIMO RESULTADO

        for(cont = 1; cont <= 10; cont++){ //CONTAGEM DE 1 ATÉ 10
            let item = document.createElement('option'); //CRIANDO OS ITENS EM FORMA DE RESULTADO DENTRO DO SELECT DO HTML
            item.text = `${n} x ${cont} = ${n*cont}`; //RESULTADO = NUMERO * X
            //item.value = `tab${c}`; //USADO PARA ENUMERAR CADA LINHA DO RESULTADO. USANDO APENAS EM PHP
            tab.appendChild(item); //EXIBINDO OS ITENS DENTRO DO SELECT DO HTML
        }
    }
}
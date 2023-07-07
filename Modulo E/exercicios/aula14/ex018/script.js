
function contar(){
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let res = window.document.getElementById('res');

    if(inicio.value.lenght == '' || fim.value.lenght == '' || passo.value.lenght == ''){
        window.alert('[ERRO] Insira os dados corretamente!');
        res.innerHTML = 'Impossível contar!';
    }else if(passo <= 0){
        passo = 1;
    }else{
        res.innerHTML = `\u{1F913} Contando: `;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(i < f){ //CONTAGEM CRESCENTE
            for(let cont = i; cont <= f; cont+=p){              
                res.innerHTML += `\u{1F449}${cont}, `;        
            }
        }else{ //SE NÃO CONTAGEM DECRESCENTE
            for(let cont = i; cont >= f; cont-=p){              
                res.innerHTML += `\u{1F449}${cont}, `;        
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }

}
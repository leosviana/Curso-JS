
function contar(){
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let res = window.document.getElementById('res');

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('[ERRO] Insira os dados corretamente!');
    }else if(inicio.value.lenght == '' || fim.value.lenght == '' || passo.value.lenght == ''){
        window.alert('[ERRO] Insira os dados corretamente!');
    }else if(passo == 0){
        passo = 1;
    }else{
        res.innerHTML = `Contando: `;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        for(let cont = i; cont <= f; cont+=p){
            if(cont >= f){
                res.innerHTML += `${cont}.`;
            }else{
                res.innerHTML += `${cont}, `;
            }
            
        }
    }

}
//EXERCICIO 014
//FUNÇÃO PARA CARREGAR HORA DO DIA, EXIBIR MENSAGEM, CARREGAR FOTO E ALTERAR COR DE FUNDO DO WEBSITE

function carregar(){
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var data = new Date(); //DATA E HORA CAPTURADA DO LADO DO SERVIDOR
    var hora = data.getHours(); //RETIRA SOMENTE AS HORAS DA VARIAVEL "data" CAPTURADA
    msg.innerHTML = `Agora são ${hora} horas.`; //ALTERA MENSAGEM DA DIV "msg"

    if(hora >= 0 && hora < 12){ //BOM DIA = ENTRE 00:00 HORAS ATÉ 11:59 HORAS
        imagem.src = 'foto-manha.png'; //CARREGA FOTO NA TAG "img"
        document.body.style.backgroundColor = '#8D9DAD'; //MUDA COR DE FUNDO
    }else if(hora >= 12 && hora <= 18){ //BOM TARDE = ENTRE 12:00 HORAS ATÉ 18:00 HORAS
        imagem.src = 'foto-tarde.png';
        document.body.style.backgroundColor = '#974473';
    }else{ //BOA NOITE = ENTRE 18:01 HORAS ATÉ 23:59 HORAS
        imagem.src = 'foto-noite.png';
        document.body.style.backgroundColor = '#29212B';
    }
}

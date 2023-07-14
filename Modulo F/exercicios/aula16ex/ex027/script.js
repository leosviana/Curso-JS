
var n = window.document.getElementById("numero");
var r = window.document.getElementById("resultado");

function btNumero(){
    if(n == ""){
        window.alert("Por favor, digite um número");
    }else if(n > 100){
        window.alert("Digite um número menor que 200.");
    }
    return n;
}

funtion 
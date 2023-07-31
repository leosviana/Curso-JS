//AULA 17 - EXEMPLO DE OBJETO EM JAVASCRIPT

let amigo = { //OBJETO
    nome: 'José',  //STRING
    sexo: 'M',     //BOLEANO
    peso: 85.4,    //REAL
    engordar(p=0){ //FUNÇÃO
        console.log('Engordou');
        this.peso += p; //SOMA A VARIAVEL "peso" + A VARIAVEL "p" (NOVO VALOR)
    }
}
amigo.engordar(2); //ENVIANDO NOVO VALOR À FUNÇÃO "engordar"

//console.log(amigo.nome); //EXIBIR APENAS O NOME
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`);
// criar um objeto direto.
let ano =2050;

let personagem={
    nome:"Paulo",
    idade:22,
    habilidade:"Criativo",
    fraqueza:"Natalia",
    saudavel:true,
}

//visualiza primeiro objeto
console.log(personagem);
//altera dados dentro do objeto direto.
personagem.nome="Lindo";
console.log(personagem);

let idadeFutura=ano-2022+(personagem.idade); // altera a idade do personagem
personagem.idade=idadeFutura;
console.log(personagem);


let pais={
    nome: "Brasil",
    pupulacao:2020200,
    capital:"Brasília",
    //pode ser usados metódos dentro do objeto, como funções e etc.
    dizerNascinalidade: function (){
        return "Nasci no " + this.nome;

    },

};
console.log(pais.dizerNascinalidade());//retorna a ação da função
let listaPersonagens=[];

//criando uma função construtora Obs obrigatoriamente deve ter o nome e letra maiuscula
function Personagem(valorNome,valorNivel,valorForca){
    this.nome=valorNome;
    this.nivel=valorNivel;
    this.forca=valorForca;

    return {
        nome: this.nome,
        nivel: this.nivel,
        forca: this.forca,
    }
}
console.log(new Personagem("Paulo",3,10));
let personagemB =new Personagem("Marcio",7,7);
listaPersonagens.push(personagemB);
console.log(listaPersonagens);
listaPersonagens.push(new Personagem("Izabel",10,6));
console.log(listaPersonagens);
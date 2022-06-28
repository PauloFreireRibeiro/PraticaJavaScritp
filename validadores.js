//if normal e mais comum, possui essa estrutura
let discurso=true; // variavel usada
if(discurso==true){ // realiza a comparação ou validação
    console.log("Liberado");// se true retora o resultado x
}else{
    console.log("Aguarde");//quando não atende a condição retorna false resultado y
}
//exemplo de switch
let cor="azul";
switch(cor){//switch realiza apenas comparações pre estabelecidas 
    case "vermelho": // determina padrão adotado
        console.log("Bom");
        break; // encerra o bloco de codigo
    case "verde":
        console.log("Normal");
        break;
    default:
        console.log("Não gosto dessa cor");
}
//OBS: eficaz em examinar se um ou mais dados são validos

// if ternario escrito em apenas uma linha com apenas duas condições.
let dinheiro = true? console.log("Eba!"):console.log("Droga!");
//exibe a resposta ou codigo de acorda com a validação da variavel
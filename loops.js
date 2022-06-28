// cria um loop for e retorna o contador no terminal
for(x=0;x<=3;x++){
    console.log(x);
}

//objeto literal
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}
for(propriedade in bart){ // percorre o objeto e busca as informações do parametro
    console.log(bart[propriedade]);
}
//exibe uma lista como os dados dentro de cara propriedade do objeto

//percorre dentro de arrays
let comida=["uva","abacate","carne"];
for(let ingredientes of comida){
    console.log(ingredientes);
}

//pode percorrar strings como arrays
let frase = "Essa semana vou no colearning";
for(let letras of frase){//varre a string(dado) dentro da variavel
    console.log(letras.split(""));//exibe cada caracter dentro e um array de acordo com o split
}

let frases = "Essa semana vou no colearning";
for(let letras of frases){//varre a string(dado) dentro da variavel
    console.log(letras);//exibe cada caracter individualmente em cada linha
}
//json é uma forma de comuinicação entre as linguagens e areas CSS, HTML, JS 

//Muito similar ao Objeto Literal, contudo não aceita:
/*
aspas simples(' ')
as chaves vão entre aspas
não suporta metódos, apenas propriedades e valores
não pode colocar virgula no final
*/
let objetoLiteral={
    texto : "txtqualquer",
    numero : 5,
    booleano : true,
    array :[1,23,366]
}
//converte um objeto ou array em JSON(Texto);
let dadosConvertidos = JSON.stringify(objetoLiteral);
console.log(dadosConvertidos);
//conconverte um JSON(Texto) em objeto ou array;
let dadosReconvertidos = JSON.parse(dadosConvertidos);
console.log(dadosReconvertidos);
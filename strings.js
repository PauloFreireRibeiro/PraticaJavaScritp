let frase= " Sou programador js ";

//indeOf trás a posição que se encontra a palavra;
console.log(frase.indexOf("js"));
console.log(frase.indexOf("programador"));

//slice busca uma palavradou texto entra as cordenadas indicadas.
console.log(frase.slice(5,17));

//trim remover os espaços no inicio e no final da string.
console.log(frase.trim());
console.log(frase);

//split retira do texto as informações entre os parametros (" ") ou ( qualquer caracter) em um array
console.log(frase.split(""));

//replace substitui um parametro por outro em uma string
console.log(frase.replace("js","JavaScript"));
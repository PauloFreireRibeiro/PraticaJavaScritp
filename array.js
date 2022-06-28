//criar um array.
let cores=["azul","verde","amarelo","cinza","amarelo"];
//exibe o array.
console.log(cores);

//adiciona novos dados aos array e apresenta nova lista.
cores.push("vermelho","preto");
console.log(cores);

//retira item do final do array e armazena informação em uma variavel.
let ultimaCor = cores.pop();
console.log(ultimaCor); // exibe item estraido.
console.log(cores); // exibe atual array.

//retira item do inicio do array e armazena informação em uma variavel.
let primeiraCor= cores.shift();
console.log(primeiraCor)// exibe item estraido.
console.log(cores);// exibe atual array.

//adiciona um ou mais itens no inicio do array.
cores.unshift(ultimaCor);
console.log(cores);

//juntas os elementos do array usando um separador que especificamos(qualquer coisa), caso não usa virgula em uma variavel.
let coresTraco= cores.join(" & ");
console.log(coresTraco);

//busca uma informação expecifica no array.
console.log(cores.indexOf("azul"));//caso não encontre nada apresenta -1.
console.log(cores.indexOf("cinza"));//caso encontre respode pela localização onde se encontra.

//busca uma informação expecifica no array do final ao incio( tras pra frente ),mesmo que aja dois ou mais intes identicos, exibe apenas o primeiro item encontrado.
console.log(cores.lastIndexOf("amarelo"));
console.log(cores.indexOf("amarelo"));

//busca os dados informados e caso encontrado exibe um valor booleano.
console.log(`Foi encontrado então é ${cores.includes("cinza")}`);
console.log(`Não foi encontrado pois é ${cores.includes("banana")}`);
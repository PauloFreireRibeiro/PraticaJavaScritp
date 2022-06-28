//arrowfunction é por si uma função igual porem de forma reduzida,mais simples
// são anônimas, não possuem nomes, caso queira nomealas é preciso executalas em um variavel
// caso sera de apenas um linha não é necessario usao de {}
// o mesmo vale para quando receber apenas 1 parametro, não utilizamos ()

//função normal
let soma=(numA,numB)=>{ //recebe dois parametros
    resultado =numA+numB // executa codigo desejado ( calculo )
    return "A soma é " +resultado; // retorna seu resoltado obtido
}
console.log(soma(5,6));// exibe resultado da função

//arrow function exemplo
var multipica=numC=>numC*3;// atribu o nome da função em uma varialvel, o parametro e executa a função
console.log(multipica(3));//exibe o resultado da arrow function
//OBS: melhor para funções simples como operações matemáticas

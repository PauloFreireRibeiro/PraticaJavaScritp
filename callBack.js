//função base recebe um URL e o adiciona Http://
function adicionarHttp(url) {
    return "http://"+url; // concatena a string com o parametro
}
//função recebe um array com inumeros URL e a função adicionarHttp
function processar(sites,callback){
   let array=[]; 
    for(i=0;i<sites.length;i++){
        let novoArray=callback(sites[i]);// em uma nova array atualizada, concatena os URLs com a função usada no callback
        array.push(novoArray);
        ;
    }

    return console.log(array)// exibe um novo array atualizado
}
console.log(adicionarHttp("www.google.com"));
processar(["www.google.com","www.facebook.com","www.amazoom.com"],adicionarHttp);

//calculadora
let somar = (nA,nB) => nA+nB //arrow function de soma
let subtrair=(nA,nB) => nA-nB //arrow function de subtrair
let multiplicar=(nA,nB) => nA*nB //arrow function de multiplicar
let dividir=(nA,nB) => nA/nB //arrow function de dividir

// function "Pai" recebe os parametros númericos e um callback
function calculadora(nA,nB,callback){
    let resultado=callback(nA,nB);
    return resultado
}
console.log(calculadora(5,2,subtrair));//exibe resultado da function
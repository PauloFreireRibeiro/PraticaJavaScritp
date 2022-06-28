//funções operações simples
function dividir(a,b){
    let totalDividir=a/b;
    return console.log(totalDividir);
}
function multiplicar(a,b){
    let totalMultiplicar=a*b;
    return console.log(totalMultiplicar);
}
        
function subtrair(a,b){
    let totalSubtrair=a-b ;    
    return console.log(totalSubtrair);
}
function somar(a,b){
    let totalSoma=a+b;
    return console.log(totalSoma);
}
// function "Pai" recebe os parametros númericos e um callback
function calculadora(a,b,callback){
    let resultado=callback(a,b);
    return resultado
}
calculadora(5,2,subtrair);//exibe resultado da function
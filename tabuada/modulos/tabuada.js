/* 
- Objetivo: Laço for que trabalha com a tabuada
- Autor:        Arthur Augusto
- Data Criação: 17/08/2022
- Version:      1.0
*/

const { exit } = require("process")

const tabuada = function(valorInicial, valorFinal, contInicial, contFinal){
    let tabuInicial = parseFloat(valorInicial)
    let tabuFinal = parseFloat(valorFinal)
    let contagemInicial = parseFloat(contInicial)
    let contagemFinal = parseFloat(contFinal)
    let resultado

    testarNumero(tabuInicial, tabuFinal, contagemInicial, contagemFinal)

    console.log('\nTabuada do '+tabuInicial)
    for(let i = contagemInicial; i <= contagemFinal ; i++){
        resultado = tabuInicial*i
        
        console.log(tabuInicial + ' x '+ i + ' = '+ resultado)
    }

    console.log('\nTabuada do '+tabuFinal)
    for(let i= contagemInicial ; i <= contagemFinal ; i++){
        resultado = tabuFinal*i
        console.log(tabuFinal + ' x '+ i + ' = '+ resultado)
    }

    exit()
}

const testarNumero = function(valorInicial, valorFinal, contagemInicial, contagemFinal){
    let inicial = valorInicial
    let final = valorFinal
    let contIni = contagemInicial
    let contFin = contagemFinal

    if(isNaN == inicial || isNaN == final){
        console.log('Digite um número')
    }
    if(inicial >100 || inicial < 2){
        console.log('Voce nao digitou um numero valido para a tabuada calcular')
    }if(final >100 || final <2){
        console.log('Voce nao digitou um numero valido para a tabuada calcular')
    }
    if( inicial == ''|| final == ''){
        console.log('A entrada de dados esta vazia, favor digitar os numeros')
    }
    if(contIni >50 || contIni<1){
        console.log('Sua contagem não é valida')
    }
    if(contFin > 50 || contFin <1){
        console.log('Sua contagem não é valida')
    }

    exit()
}

module.exports ={
    tabuada
}
/* 
- Objetivo: Laço for que faz a contagem dos números e mostra se são pares ou impares
- Autor:        Arthur Augusto
- Data Criação: 16/08/2022
- Version:      1.0
*/

const { parse } = require("path")
const { exit } = require("process")

const parImpar = function(nInicial, nFinal, tipagem){
    let numeroInit = parseFloat(nInicial)
    let numeroFin = parseFloat(nFinal)
    let tipo = tipagem.toLowerCase()
    let contagem = 0

    tratativa(numeroInit, numeroFin, tipo)

    if(tipo == 'par' || tipo == 'pares' || tipo == '1'){
        console.log(`Lista de números pares`)
        for(let i = numeroInit ; i<=numeroFin ; i++){
            if(i % 2 ==0){
                console.log(`${i}\n`)
                contagem++
            }
        }
        console.log(`Qntde de números encontrados: ${contagem}`)
    }
    if(tipo == 'impar'|| tipo == 'impares'||tipo=='2'){
        console.log(`Lista de números impares`)
        for(let i = numeroInit ; i<=numeroFin ; i++){
            if(i%2 != 0 ){
                console.log(`${i}\n`)
                contagem++
            }
        }
        console.log(`Qntde de números impares encontrados: ${contagem}`)
    }
    if(tipo == 'ambos' || tipo == '3'){
        console.log(`Lista de números pares e impares`)
        for(let i = numeroInit ; i<=numeroFin ; i++){
            if(i %2 == 0 ){
                console.log(`${i}\n`)
                contagem++
            }
            if(i%2 != 0 ){
                console.log(`${i}\n`)
                contagem++
            }
        }
        console.log(`Qntde de números pares e impares encontrados: ${contagem}`)
    }
}

const tratativa = function(nInicial, nFinal, tipagem){
    let numeroInit = parseFloat(nInicial)
    let numeroFin = parseFloat(nFinal)
    let tipo = tipagem.toLowerCase()

    if(numeroInit < 0 || numeroInit >500){
        console.log('Número inicial está fora da regra')
    }else if(numeroFin <100 || numeroFin > 1000){
        console.log('Numero final fora da regra')
    }else if(numeroInit == '' || numeroFin == '' || tipo == ''){
        console.log('Entrada de dados vazia')
    }else if( numeroInit > numeroFin){
        console.log('Erro, numero inicial maior que numero final')
    }else if(numeroInit == numeroFin){
        console.log('Ambos os numeros são iguais, impossivel prosseguir')
    }
    exit()
}

module.exports={
    parImpar
}
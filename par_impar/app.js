/* 
- Objetivo: Escolher se a pessoa quer valores impares ou pares
- Autor:        Arthur Augusto
- Data Criação: 16/08/2022
- Version:      1.0
*/

const { exit } = require('process')
var readline = require('readline')
const { tratativa, parImpar } = require('./modulos/par')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

entradaDados.question('Digite o primeiro número\n', function(nInicial){
    let numeroInit =parseFloat(nInicial)

    entradaDados.question('Digite o segundo número\n', function(nFinal){
        let numeroFin = parseFloat(nFinal)
        
        entradaDados.question('Digite o tipo que você deseja\n1-Pares\n2-Impares\n3-Ambos\n', function(tipagen){
            let tipo = tipagen.toLowerCase()
            let res

            if(res = parImpar(numeroInit, numeroFin, tipo)){
                
            }
        })
    })
})
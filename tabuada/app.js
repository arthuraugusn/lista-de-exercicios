/* 
- Objetivo: Faz a tabuada
- Autor:        Arthur Augusto
- Data Criação: 17/08/2022
- Version:      1.0
*/

var readline = require('readline')
const { tabuada, testarNumero } = require('./modulos/tabuada')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número para a primeira tabuada (Entre 2 e 100)\n', function(valorInicial){
    let tabuInicial = valorInicial

    entradaDados.question('Digite o número para a segunda tabuada (Entre 2 e 100)\n', function(valorFinal){
        let tabuFinal = valorFinal

        entradaDados.question('Digite a primeira casa que voce deseja calcular (Entre 2 e 50)\n', function(contInicial){
            let contagemInicial = contInicial

            entradaDados.question('Digite a ultima casa que voce deseja calcular (Entre 2 e 50)\n', function(contFinal){
                let contagemFinal = contFinal
                let resultado

                if(resultado = tabuada(tabuInicial, tabuFinal, contagemInicial, contagemFinal)){
                    console.log(resultado)
                }
            })
        })
    })
})
/* 
- Objetivo: Calcular a média estudante
- Autor:        Arthur Augusto
- Data Criação: 17/08/2022
- Version:      1.0
*/

const { parse } = require('path');
const { exit } = require('process');
var readline = require('readline');
const {montagemRelatorio, mediaNormal, mont, mediaExame } = require('./modulos/calculoMedia');
var entradaDados= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Sexo professor(a): ', function(sexP){
    let sexoProf = sexP;
    entradaDados.question('Nome professor: ', function(nomeP){
        let nomeProf = nomeP;
        entradaDados.question('Sexo aluno(a): ', function(sexA){
            let sexoAlun = sexA;
            entradaDados.question('Nome aluno(a): ', function(nomeA){
                let nomeAlun = nomeA;
                entradaDados.question('Disciplina: ', function(disciplin){
                    let disciplina = disciplin;
                    entradaDados.question('Nome do curso: ', function(cursoNome){
                        let nomeCurso = cursoNome;
                        entradaDados.question('Digite uma nota: ', function(valor1){
                            let nota1 = parseFloat(valor1);
                            entradaDados.question('Nota:', function(valor2){
                                let nota2 = parseFloat(valor2);
                                entradaDados.question('Nota:', function(valor3){
                                    let nota3 = parseFloat(valor3);
                                    entradaDados.question('nota:', function(valor4){
                                        let nota4 = parseFloat(valor4);
                                        let resultado= mediaNormal(nota1,nota2,nota3,nota4);

                                        if(resultado >=  70){
                                            let statusAluno;
                                            entradaDados.question('Digite a nota adquirida no exame: ', function(valorExame){
                                            let notaExame = parseFloat(valorExame);
                                            resultado = mont(nota1, nota2, nota3, nota4, statusAluno, notaExame, sexoProf, nomeProf, nomeAlun, sexoAlun, disciplina, nomeCurso, resultado)
                                            console.log(resultado)
                                            })
                                            
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


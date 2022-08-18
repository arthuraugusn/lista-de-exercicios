/* 
- Objetivo: Calculo da média, colocando o gênero e fazendo a tratativa de erro
- Autor:        Arthur Augusto
- Data Criação: 17/08/2022
- Version:      1.0
*/

const { exit } = require("process");

const montagemRelatorio = function(valor1, valor2, valor3, valor4, valorExame,sexP, nomeP, nomeA, sexA, disciplin, cursoNome, mediaFinal){
    let nota1 = parseFloat(valor1);
    let nota2 = parseFloat(valor2);
    let nota3 = parseFloat(valor3);
    let nota4 = parseFloat(valor4);
    let notaExame = parseFloat(valorExame);
    let erroNota = 'Valor da nota está incorreto';
    if(nota1 >100 || nota1 < 0 || nota1 == ''){
        console.log(erroNota);
        exit();
    }else if(nota2 >100 || nota2 < 0 || nota2 == ''){
        console.log(erroNota);
    }else if(nota3 >100 || nota3 < 0 || nota3 == ''){
        console.log(erroNota);
    }else if(nota4 >100 || nota4 < 0 || nota4 == ''){
        console.log(erroNota);
    }else if(notaExame >100 || notaExame < 0 || notaExame == ''){
        console.log(erroNota);
    }
} 

const mont = function(valor1, valor2, valor3, valor4,statusAluno, valorExame,sexP, nomeP, nomeA, sexA, disciplin, cursoNome, mediaFinal){
    if(sexP == 'fem'){
        sexP = 'a'
    }else if(sexA == 'masc'){
        sexA = 'o'
    }else if(sexA == 'fem'){
        sexA = 'a'
    }
    console.log('O aluno '+nomeA+' foi'+statusAluno+'na disciplina '+disciplin+'\nCurso: '+cursoNome+'\nProfessor'+sexP+': '+nomeP+'\nNotas do alun'+sexA+': '+
    valor1+', '+valor2+ ', '+valor3+', '+valor4+', '+valorExame+ '\nMedia final: '+mediaFinal+'\nMedia final exame: ')
}
const mediaNormal = (valor1, valor2, valor3, valor4) => (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;
const mediaExame = (valor1, valor2, valor3, valor4, valorExame) => (parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3)+parseFloat(valor4)+parseFloat(valorExame))/5;
module.exports ={
    montagemRelatorio,
    mediaNormal,
    mont,
    mediaExame
}
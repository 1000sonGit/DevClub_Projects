/*
 O Map aceita até 3 parâmetros:

const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal) => xxx )


	1) O Map vai passar por todos os itens do array, e o primeiro parâmetro é cada item, um por vez do array que estamos mapeando. Item OBRIGATÓRIO.
	2) O indíce é a posição atual que estamos mapeando. Item OPCIONAL.
	3) Uma cópia do array original. Item OPCIONAL.

*/

const numbers = [1, 2, 3, 4];
const double = numbers.map((num) => num * 2);

// double ficou assim... [2, 4, 6, 8];
// numbers continua...   [1, 2, 3, 4];

const list = [
    { name: 'Rodolfo', vip: true},
    { name: 'Maria', vip: false},
    { name: 'João', vip: true},
    { name: 'Bruno', vip: true},
    { name: 'Carla', vip: false},
    { name: 'Ana', vip: true},
    { name: 'Julio', vip: false},
]

//Usando Map reduce para dar pulseira black para VIP e green para os demais
const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
    return newUser
})

console.log(newList)

const students = [
    { name: 'Rodolfo', testGrade: 7},
    { name: 'Maria', testGrade: 5},
    { name: 'João', testGrade: 8},
    { name: 'Bruno', testGrade: 9},
    { name: 'Carla', testGrade: 3},
    { name: 'Ana', testGrade: 2},
    { name: 'Julio', testGrade: 10}
]

const listResult = students.map( student => {
    const value = {
        name: student.name,
        result: student.testGrade >= 5 ? 'Aprovado' : 'Reprovado'
    }
    return value
})

console.log(listResult)
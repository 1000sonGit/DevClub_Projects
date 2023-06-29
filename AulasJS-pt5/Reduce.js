/*
 O Reduce aceita até 4 parâmetros:

const novoArray = arrayOriginal.reduce(
  (acumulador, valorAtual, índice, arrayOriginal) => {
			return xxxxx
}, valorInicial);


	1) O acumulador, na primeira iteração terá o valor inicial que daremos a ele.            
       Já nas demais iterações, ele terá o valor que iremos acumular nele. Item OBRIGATÓRIO.
	2) O valor do atual elemento sendo iterado. Item OBRIGATÓRIO.
	3) O índice do elemento atual. Item OPCIONAL.
	4) O array original. Item OPCIONAL.


*/

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acumulador, atual) => {
		return acumulador = acumulador + numero;
}, 0) // repare nesse 0. Ele é o valor inicial que o acumulador receberá


/*
O que aconteceu aqui ? Definimos um valor inicial para o acumulador. Então ele começou a somar número a número dentro do array.

Na primeira iteração foi assim:
	
 acumulador = acumulador(0) + atual(1) -> Agora acumulador valerá 1

Na seginda iteração, agora acumulador vale 1.
	 
 acumulador = acumulador(1) + atual(2) -> Agora acumulador valerá 3
*/


// total é igual a 15;
// numbers continua...   [1, 2, 3, 4];


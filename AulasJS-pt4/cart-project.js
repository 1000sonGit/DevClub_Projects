/* Calculadora de Desconto:
    Todos os Produtos acima de R$30,00 tem desconto de 10%.
*/
const cart = [10, 244, 99, 2, 20, 33, 250]

function sumDesc(array) {
    let sumParcial = 0
    let sumTotal = 0
    //Looping sem desconto
    array.forEach(element => {
        sumTotal += element
    });
    //Looping para o desconto
    array.forEach(item => {
        (item > 30) ? sumParcial += item*0.9 : sumParcial += item
    });
    return console.log(`O valor final da compra é de : R$${sumTotal.toFixed(2)}, porém
    você teve desconto, irá pagar apenas R$${sumParcial.toFixed(2)}, você economizou
    R$${(sumTotal-sumParcial).toFixed(2)}!`)
    //OU sum..toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

sumDesc(cart)
const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelect = document.querySelector(".currency-select")

const arrayCurrency = {real:[0, "pt-BR", "BRL", "Real"], dolar:[1, "en-US", "USD", "Dólar"] , euro:[2, "de-DE", "EUR", "Euro"], libra:[3, "en-GB", "GBP", "Libra"], bitcoin:[4, "de-DE", "XBT", "Bitcoin"]}

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //valor de outras moedas

    // 0-real, 1-dólar, 2-euro, 3-libra, 4-bitcoin | Matriz 4x4
    const matriz = [[1, 1/4.82, 1/5.29, 1/6.18, 1/126952.12],
                    [4.82, 1, 0.91, 0.78, 0.000038],                    
                    [5.29, 1.1, 1, 0.86, 0.000042],
                    [6.18, 1.28, 1.17, 1, 0.000049],
                    [126952.12, 26299.90, 23994.71, 20508.34, 1]]
    
    
    /*Moeda a ser convertida*/
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(arrayCurrency[currencySelectToConvert.value][1], {
        style: "currency",
        currency: arrayCurrency[currencySelectToConvert.value][2]
    }).format(inputCurrencyValue)

    /*Moeda convertida*/
    currencyValueConverted.innerHTML = new Intl.NumberFormat(arrayCurrency[currencySelect.value][1], {
        style: "currency",
        currency: arrayCurrency[currencySelect.value][2]
    }).format(inputCurrencyValue * matriz[arrayCurrency[currencySelectToConvert.value][0]][arrayCurrency[currencySelect.value][0]])
        

}

function changeCurrency(){
    //Para moeda a converter
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert")
    //Para moeda convertida
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    //Para moeda a converter
    currencyNameToConvert.innerHTML = arrayCurrency[currencySelectToConvert.value][3]
    currencyImageToConvert.src = `./assets/${currencySelectToConvert.value}.png`
    //Para moeda convertida
    currencyName.innerHTML = arrayCurrency[currencySelect.value][3]
    currencyImage.src = `./assets/${currencySelect.value}.png`
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
currencySelectToConvert.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
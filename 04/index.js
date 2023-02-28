let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let identificadorFormatado = identificador.padStart(6, '0') //qual o problema?
let emailFormatado = email.trim()

let arrayNomes = nome.split(' ')

let nomeFormatado = ''

for (let name of arrayNomes) {

    let primeiraLetra = name.slice(0, 1)
    let restoNome = name.slice(1)

    nomeFormatado += primeiraLetra.toUpperCase() + restoNome + ' '
}

console.log(identificadorFormatado)
console.log(nomeFormatado)
console.log(emailFormatado)
const cpf = "12345678900";

let cpfFormatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`


if (cpf.length != 11) {
    console.log('CPF Inválido')

} else {
    console.log(cpfFormatado)
}


const cnpj = "12345678000199";

let cnpjFormatado = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`

if (cnpj.length != 14) {
    console.log('CNPJ Inválido')

} else {
    console.log(cnpjFormatado)
}
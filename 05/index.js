const numeroCartao = '1111222233334444';

let primeiros4Digitos = numeroCartao.slice(0, 4)
let ultimos4Digitos = numeroCartao.slice(12)
let digitosMeio = numeroCartao.slice(4, 12)
let digitosMeioFormatado = '';

for (let item of digitosMeio) {
    digitosMeioFormatado += '*'

}

console.log(digitosMeioFormatado)



// console.log(`${primeiros4Digitos}********${ultimos4Digitos}`)
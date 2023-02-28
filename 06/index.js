const celular = 991888800000;

let celularString = String(celular)

let ddd = 0
let nove = 0
let quatroPrimeiros = 0
let quatroultimos = 0


if (celularString.length == 11) {
    ddd = celularString.slice(0, 2)
    nove = celularString.slice(2, 3)
    quatroPrimeiros = celularString.slice(3, 7)
    quatroultimos = celularString.slice(7)

    console.log(`(${ddd}) ${nove} ${quatroPrimeiros}-${quatroultimos}`)

} else if (celularString.length == 10) {
    ddd = celularString.slice(0, 2)
    quatroPrimeiros = celularString.slice(2, 6)
    quatroultimos = celularString.slice(6)

    console.log(`(${ddd}) 9 ${quatroPrimeiros}-${quatroultimos}`)

} else if (celularString.length == 9) {
    nove = celularString.slice(0, 1)
    quatroPrimeiros = celularString.slice(1, 5)
    quatroultimos = celularString.slice(5)

    console.log(`${nove} ${quatroPrimeiros}-${quatroultimos}`)

} else if (celularString.length == 8) {
    quatroPrimeiros = celularString.slice(0, 4)
    quatroultimos = celularString.slice(4)

    console.log(`9 ${quatroPrimeiros}-${quatroultimos}`)

} else {
    console.log('Numero não permitido')
}




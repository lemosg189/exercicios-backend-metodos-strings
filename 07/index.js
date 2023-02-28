const email = "aluno@cubos.academy";

// let temArroba = false
// let temPonto = false
// let indexArroba = email.indexOf('@')
// let indexArrobaPonto = email.lastIndexOf(".")

// (temArroba && temPonto == && email[0] !== '.' && email.length.indexOf() !== '.')


let emailVerificado = true

if (!email.includes('@')) {
    emailVerificado = false

} else if (!email.includes('.')) {
    emailVerificado = false

} else if (email.indexOf('.') === 0 || email.lastIndexOf('.') === email.length - 1) {
    emailVerificado = false
}


if (emailVerificado) {
    console.log('E-mail válido')

} else {
    console.log('E-mail inválido')
}



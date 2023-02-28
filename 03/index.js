const texto = "Aprenda programar do zero na Cubos Academy";

const textoFormatado = texto.toLocaleLowerCase().replaceAll(' ', '-')


function replaceAll(textoFormatado, mudanca, adicionar) {
    while (textoFormatado !== textoFormatado.replace(mudanca, adicionar)) {
        textoFormatado = textoFormatado.replace(' ', '-')

    }
    return textoFormatado
}


console.log(replaceAll(textoFormatado))



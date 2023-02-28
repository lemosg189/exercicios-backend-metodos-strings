const comentario = "Esse COVID é muito perigoso!";

let palavraCovid = comentario.toUpperCase().includes('COVID')
let palavraPandemia = comentario.toUpperCase().includes('PANDEMIA')

if (!palavraPandemia && !palavraCovid) {
    console.log('Comentário Autorizado.')

} else {
    console.log('Comentário bloqueado por conter palavras proibidas.')
}




const prompt = require("prompt-sync")()
let arquivo = []
let entrada

function verificar(num, list){
    for (let i = 0; i < list.length; i++) {
        if (list[i] === num) {
            return true
        }
    }
    return false
}

while(true) {
    entrada = prompt("Digite um número ou 's' para sair:  ")

    if (entrada.toLowerCase() === 's'){
        break
    }

    const num = Number(entrada)
    if(!isNaN(num)) {
        if(verificar(num, arquivo)) {
            console.log(`ERRO: O número ${num} já está na lista`)
        } else {
            arquivo.push(num)
            console.log(`Número ${num} adicionado. Aray atual: [${arquivo.join(', ')}]`)
        } 
    } else {
        console.log('Entrada inválida, tente novamente')
    }
}


console.log(`Array final: ${arquivo}`)

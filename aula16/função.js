const prompt = require("prompt-sync")()

function parimp(n) {
const num = prompt("Digite um numero: ")

    if (num % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }

}

let res = parimp()
console.log(res)
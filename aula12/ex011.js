const prompt = require("prompt-sync")()
var idade = 16
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota')
} else if(idade < 18){
        console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}
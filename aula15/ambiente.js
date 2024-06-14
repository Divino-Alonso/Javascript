const prompt = require("prompt-sync")()
/*let num = [5, 8, 2, 9, 3]
const numero = new Array(2, 3, 4, 9)
console.log(numero)
num[5] = 6
num.push(8)
num.sort()
console.log(num)
console.log(`O vetor  tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`\n`)
for (let i = 0; i <= num.length; i++){
    console.log(`${num[i]}`)
}

for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
console.log(num.indexOf(8))*/
let num = []
const numero = Number(prompt("Digite seu numero: "))
while(true){
    const numero = Number(prompt('Digite seu numero: '))
    if (numero == 'q'){
        console.log('Obrigado por usar nosso programa')
        break
    } else {
        num.push(numero)
        console.log(num)
    }
}
const prompt = require("prompt-sync")()
var vel = 89
console.log(`A velocidade do seu carro é ${vel} KM/h`)
if(vel > 60){
    console.log(`Você ultrapasou a velocidade permitida. MULTADO`)
} else {
    console.log(`Dirija sempre com cinto de segurança`)
}
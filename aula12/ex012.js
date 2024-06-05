const prompt = require("prompt-sync")()
var agora = new Date()
var hora = agora.getHours()
console.log(`Agoras são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
} else if(hora <= 18) {
    console.log('Boa tarde')
} else if(hora >= 18.00) {
    console.log('Boa noite')
}
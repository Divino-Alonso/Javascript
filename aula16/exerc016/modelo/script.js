let numero = document.getElementById('inNum')
let res = document.getElementById('res')
let nov = document.getElementById('resultadoFinal')
let adicionado = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true 
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    const valor = Number(numero.value)
    
    
    if(isNumero(numero.value) && !inLista(numero.value, adicionado)) {
        adicionado.push(valor)
        let elem = document.createElement('option')
        elem.text = `Valor ${numero.value} adicionado`
        res.appendChild(elem)
        nov.innerHTML = ''
    } else {
        alert('Número inválido ou já encontrado na lista...')
    }
    numero.value = ''
    numero.focus()
}

function isNumberInList(num, list){
    for(let i = 0; i < list.length; i++){
        if(list[i] === num){
            return true
        }
    }
    return false
}

function finalizar() {
    if (adicionado.length == 0) {
        alert('Adicione valores antes finalizar!')
    } else {
        let total = adicionado.length
        let maior = adicionado[0]
        let menor = adicionado[0]
        let soma = 0
        let media = 0
        for(let pos in adicionado){
            soma = soma + adicionado[pos]
            if(adicionado[pos] > maior)
                maior = adicionado[pos]
            if (adicionado[pos] < menor)
                    menor = adicionado[pos]
        }
        media = soma / total
        nov.innerHTML = ''
        nov.innerHTML = `<p>Ao todo, temos ${total} cadastrados.</p>`
        nov.innerHTML += `<p>O maior número é ${maior}.</p>`
        nov.innerHTML += `<p>O menor número é ${menor}</p>`
        nov.innerHTML += `<p>Somando todos os valores, temos ${soma}`
        nov.innerHTML += `<p>A média dos valores digitados é ${media} </p>`
    }
}
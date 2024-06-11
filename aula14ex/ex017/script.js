function tabuada(){
    var numero = document.getElementById('inNum')
    var tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        alert('Por favor, digite um número!')
        
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ``
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
     

    }
}


/*     
meu código
for (let i = 1; i <= 10; i++){
            resposta = `${resposta}${numero}  X ${i} = ${numero * i}\n`
            resp.innerText = resposta

    } */
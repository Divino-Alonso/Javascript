function contar(){
    var inicio = document.getElementById('inNum1').value
    var fim = document.getElementById('inNum2').value
    var passo = document.getElementById('inNum3').value
    var res = document.querySelector('div#res')

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0){
        alert("Por favor, insira valores validos.")
        return
    }

    res.innerHTML = ' '   
    var resultado = 'Contagem: '

    if(inicio <= fim){
        for (var i = inicio; i <= fim; i += passo) {
            resultado += i 
            if (i < fim){
                resultado = resultado +  '👉' 
            } else {
                resultado += '🏁'
            }
        }
    } else { 
        for(var i = inicio; i >= fim; i -= passo){
            resultado += i 
            if (i > fim){
                resultado = resultado + '👉'
            } else {
                resultado += '🏁'
            }
        }
    }
    res.innerHTML = resultado
}

//maozinho &#128072;
//bandeira &#127937;

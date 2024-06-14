function contar(){
    let inicio = document.getElementById('inNum1')
    let fim = document.getElementById('inNum2')
    let passo = document.getElementById('inNum3')
    let res = document.getElementById('res')

    
    //if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0)
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar`
        
    
    } else {

        res.innerHTML = 'Contando: <br>'   
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    res.innerHTML += `\u{1F3c1}` 
    }
}        
//maozinho &#128072;
//bandeira &#127937;

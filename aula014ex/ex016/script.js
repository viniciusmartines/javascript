function contar() {
    let txti = document.getElementById('ini')
    let txtf = document.getElementById('fim')
    let txtp = document.getElementById('pas')
    let texto = document.getElementById('resp')

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        // alert('[ERRO] Faltam dados!')
        texto.innerHTML = ('Faltam dados, impossível contar!')
    } else {
        texto.innerHTML = ('Contando: <br>')
        let ini = Number(txti.value)
        let fim = Number(txtf.value)
        let pas = Number(txtp.value)
        if (pas <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            pas = 1
        }
        if (ini < fim) {
            for (cont = ini; cont <= fim; cont += pas) {
                texto.innerHTML += (` ${cont} \u{1F449}`)
            }
        } else {
            for (cont = ini; cont >= fim; cont -= pas) {
                texto.innerHTML += (` ${cont} \u{1F449}`)
            }
        }
        texto.innerHTML += `\u{1F3C1}`
    }
}